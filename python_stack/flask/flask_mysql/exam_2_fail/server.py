from flask import Flask, session, render_template, request, flash, redirect
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "not p@ssw0rd22"
DATABASE = "exam_trip_buddy"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

@app.route ('/')
def homepage():
    return render_template('index.html')

@app.route("/register", methods=["POST"])
def register():
    is_valid = True
    if len(request.form['first_name']) < 2:
    	is_valid = False
    	flash("please enter your first name.")
    if len(request.form['last_name']) < 2:
    	is_valid = False
    	flash("please enter your last name.")
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address!")
    if len(request.form['password']) < 8:
    	is_valid = False
    	flash("password must be atleast 8 characters long.")
    if (request.form['password'] != request.form['confirm_password']):
    	is_valid = False
    	flash("passwords do not match.")
    if not is_valid:
        return redirect('/')
    else:
        flash("sucessfully added")

    mysql = connectToMySQL(DATABASE)
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    query = "INSERT INTO users (email, password, first_name, last_name) VALUES (%(em)s,%(pw)s,%(fn)s,%(ln)s);"
    data = {
        'em': request.form['email'],
        'pw': pw_hash,
        'fn': request.form['first_name'],
        'ln': request.form['last_name']
    }
    id_users = mysql.query_db(query,data)
    session['id_user'] = id_users
    session['greeting'] = request.form['first_name'] 

    return redirect('/dashboard')

@app.route('/login', methods=['POST'])
def login():
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM users WHERE email = %(em)s;"
    data = {
        'em': request.form['email']
    }
    result = mysql.query_db(query, data)

    if len(result) > 0:
        if bcrypt.check_password_hash(result[0]['password'], request.form['password']):
            session['id_user'] = result[0]['id_user']
            session['greeting'] = result[0]['first_name']
            return redirect('/dashboard')
        else:
            flash("Email and/or password does not match.")
            return redirect('/')
    else:
        flash("Please enter your registered Email.")
        return redirect('/')

@app.route('/dashboard')
def dashboard():
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM users;"
    all_user = mysql.query_db(query)

    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM trips WHERE users_trip = %(id)s ORDER BY created_at DESC;"
    data = {
        'id': session['id_user']
    }
    all_trips = mysql.query_db(query, data)

    return render_template('dashboard.html', users = all_user, trips = all_trips)

@app.route('/newtrip')
def newtrip():
    return render_template('newtrip.html')

@app.route('/create', methods=["POST"])
def create():
    flag = True
    if len(request.form['destination']) < 3:
        flag = False
        flash('Please input desination.')
    if len(request.form['start_date']) < 9:
        flag = False
        flash('Start Date must be selected.')
    if len(request.form['end_date']) < 9:
        flag = False
        flash('End Date must be selected.')
    if len(request.form['plan']) < 3:
        flag = False
        flash('Please input plan.')
    if not flag:
        return redirect ('/newtrip')
    else:
        mysql = connectToMySQL(DATABASE)
        query = "INSERT INTO trips (destination, start_date, end_date, plan, users_trip) VALUES (%(dest)s, %(sd)s, %(ed)s, %(pln)s, %(ut)s);"
        data = {
            'dest': request.form['destination'],
            'sd': request.form['start_date'],
            'ed': request.form['end_date'],
            'pln': request.form['plan'],
            'ut': session['id_user']
        }
        id = mysql.query_db(query, data)
    return redirect ('/dashboard')

@app.route('/edit/<users_trip>/<trip_id>')
def edit(users_trip, trip_id):
    print(session['id_user'], users_trip)
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM trips WHERE trip_id = %(id)s;"
    data = {
        "id": trip_id
    }
    trip_results = mysql.query_db(query, data)
    print(trip_results)
    return render_template("editTrip.html", trips = trip_results[0])

@app.route('/update/<trip_id>/<users_trip>', methods=["POST"])
def update(trip_id, users_trip):
    flag = True
    if len(request.form['destination']) < 3:
        flag = False
        flash('Please input desination.')
    if len(request.form['start_date']) < 9:
        flag = False
        flash('Start Date must be selected.')
    if len(request.form['end_date']) < 9:
        flag = False
        flash('End Date must be selected.')
    if len(request.form['plan']) < 3:
        flag = False
        flash('Please input plan.')
    if not flag:
        return redirect(f'/edit/{users_trip}/{trip_id}')
    else:
        mysql = connectToMySQL(DATABASE)
        query = "UPDATE trips SET destination = %(dest)s, start_date = %(sd)s, end_date = %(ed)s, plan = %(pln)s, users_trip = %(ut)s WHERE trip_id = %(id)s;"
        data = {
            "dest": request.form["destination"],
            "sd": request.form["start_date"],
            "ed": request.form["end_date"],
            "pln": request.form["plan"],
            'ut': session['id_user'],
            "id": trip_id
        }
        id = mysql.query_db(query, data)

    return redirect('/dashboard')

@app.route('/delete/<id>/<thing>')
def delete(id,thing):
    if session['id_user'] == int(thing):
        mysql = connectToMySQL(DATABASE)
        query = "DELETE FROM trips WHERE trip_id = %(id)s;"
        data = {
            "id": id
        }   
        mysql.query_db(query, data)
        return redirect('/dashboard')
    else:
        flash("Unable to delete other's quotes")
        return redirect('/dashboard')

@app.route('/trip_details/<trip_id>')
def details(trip_id):
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM trips JOIN users ON users_trip = id_user WHERE trip_id = %(id)s;"
    data = {
        "id": trip_id
    }
    
    trip_results = mysql.query_db(query, data)

    return render_template('trip_details.html', trip = trip_results[0])

@app.route ('/logout')
def logout():
    session.clear()
    return redirect('/')

if __name__=="__main__":      
    app.run(debug=True)  