from flask import Flask, session, render_template, request, flash, redirect
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "not p@ssw0rd22"
DATABASE = "exam_4"
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
        

    mysql = connectToMySQL(DATABASE)
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    query = "INSERT INTO users (email, password, first_name, last_name) VALUES (%(em)s,%(pw)s,%(fn)s,%(ln)s);"
    data = {
        'em': request.form['email'],
        'pw': pw_hash,
        'fn': request.form['first_name'],
        'ln': request.form['last_name']
    }
    id_user = mysql.query_db(query,data)
    session['id_user'] = id_user
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
    query = "SELECT * FROM jobs;"
    user_jobs = mysql.query_db(query)

    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM jobs WHERE users_job = %(id)s;"
    data = {
        "id": session['id_user']
    }
    my_jobs = mysql.query_db(query, data)

  

    return render_template('dashboard.html', jobs = user_jobs, jobs1 = my_jobs)

@app.route('/newjob')
def newjob():
    return render_template('/newjob.html')

@app.route('/create', methods=["POST"])
def create():
    flag = True
    if len(request.form['title']) < 3:
        flag = False
        flash('Please input title.')
    if len(request.form['description']) < 3:
        flag = False
        flash('Please provide a description.')
    if len(request.form['location']) < 3:
        flag = False
        flash('Please provide a location.')
    if not flag:
        return redirect ('/newjob')
    else:
        mysql = connectToMySQL(DATABASE)
        query = "INSERT INTO jobs (users_job, title, description, location) VALUES (%(uj)s,%(ti)s,%(desc)s,%(loc)s);"
        data = {
            "ti": request.form["title"],
            "desc": request.form["description"],
            "loc": request.form["location"],
            "uj": session["id_user"]
            }
        id = mysql.query_db(query, data)

    return redirect ('/dashboard')

@app.route('/jobdetails/<id_job>')
def details(id_job):
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM jobs JOIN users ON users_job = id_user WHERE id_job = %(id)s;"
    data = {
        "id": id_job
    }
    
    results = mysql.query_db(query, data)

    return render_template('jobDetails.html', job = results[0])

@app.route('/edit/<users_job>/<id_job>')
def edit(users_job, id_job):
    print(session['id_user'], users_job)
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM jobs WHERE id_job = %(id)s;"
    data = {
        "id": id_job
    }
    job_results = mysql.query_db(query, data)
    return render_template("editjob.html", jobs = job_results[0])

@app.route('/update/<id_job>/<users_job>', methods=["POST"])
def update(id_job, users_job):
    flag = True
    if len(request.form['title']) < 3:
        flag = False
        flash('Please input title.')
    if len(request.form['description']) < 3:
        flag = False
        flash('Please provide a description.')
    if len(request.form['location']) < 3:
        flag = False
        flash('Please provide a location.')
    if not flag:
        return redirect(f'/edit/{users_job}/{id_job}')
    else:
        mysql = connectToMySQL(DATABASE)
        query = "UPDATE jobs SET title = %(ti)s, description = %(desc)s, location = %(loc)s, users_job = %(uj)s WHERE id_job = %(id)s"
        data = {
            "ti": request.form["title"],
            "desc": request.form["description"],
            "loc": request.form["location"],
            "uj": session["id_user"],
            "id": id_job
        }
        id = mysql.query_db(query, data)

    return redirect ('/dashboard')
    
@app.route('/delete/<id>/<job>')
def delete(id,job):
    if session['id_user'] == int(job):
        mysql = connectToMySQL(DATABASE)
        query = "DELETE FROM jobs WHERE id_job = %(id)s;"
        data = {
            "id": id
        }   
        mysql.query_db(query, data)
        return redirect('/dashboard')
    else:
        flash("Unable to delete other's quotes")
        return redirect('/dashboard')

@app.route ('/logout')
def logout():
    session.clear()
    return redirect('/')

if __name__=="__main__":      
    app.run(debug=True)  