from flask import Flask, session, render_template, request, flash, redirect
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "not p@ssw0rd22"
DATABASE = "exam_3"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

@app.route ('/')
def homepage():
    return render_template('index.html')

@app.route("/register", methods=["POST"])
def register():
    is_valid = True
    if len(request.form['name']) < 5:
    	is_valid = False
    	flash("please enter your alias.")
    if len(request.form['alias']) < 2:
    	is_valid = False
    	flash("please enter your alias.")
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
    query = "INSERT INTO users (email, password, alias, name, birthdate) VALUES (%(em)s,%(pw)s,%(al)s,%(nm)s,%(bd)s);"
    data = {
        'em': request.form['email'],
        'pw': pw_hash,
        'al': request.form['alias'],
        'nm': request.form['name'],
        'bd': request.form['birthdate']
    }
    id_users = mysql.query_db(query,data)
    session['id_user'] = id_users
    session['greeting'] = request.form['name'] 

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
            session['greeting'] = result[0]['name']
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
    query = "SELECT * FROM users"
    user_results = mysql.query_db(query)
    print("-"*60)
    print(user_results)

    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM pokes"
    poke_results = mysql.query_db(query)
    print("*"*60)
    print(poke_results)

    return render_template('/dashboard.html', users = user_results, pokes = poke_results)

@app.route('/poke/<id_user>', methods=["POST"])
def poke(id_user):
    mysql = connectToMySQL(DATABASE)
    query = "INSERT INTO pokes (poke_count) VALUES (%(vl)s, %(us)s;"
    data = {
        "vl": request.form["poked"],
        "us": id_user
    }
    mysql.query_db(query,data)

    return redirect('/dashboard')


@app.route ('/logout')
def logout():
    session.clear()
    return redirect('/')

if __name__=="__main__":      
    app.run(debug=True)  