from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "something secret5"
DATABASE = "login_registration"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

#users
# id_users, email, password, created_at, updated_at, first_name, last_name

@app.route("/")
def signin():
    return render_template("index.html")

@app.route("/register", methods=["POST"])
def register():
    is_valid = True
    if len(request.form['first_name']) < 2:
    	is_valid = False
    	flash("please enter your first name.")
    if len(request.form['last_name']) < 2:
    	is_valid = False
    	flash("please enter your last name.")
    if not EMAIL_REGEX.match(request.form['email']):   # test whether a field matches the pattern
        flash("Invalid email address!")
    if len(request.form['password']) < 8:
    	is_valid = False
    	flash("password must be atleast 8 characters long.")
    if (request.form['password'] != request.form['confirm_password']):
    	is_valid = False
    	flash("passwords do not match.")
    if not is_valid:    # if any of the fields switched our is_valid toggle to False
        return redirect('/')    # redirect back to the method that displays the index page
    else:               # if is_valid is still True, all validation checks were passed
        flash("sucessfully added")
    	# add user to database
        # display success message
        # redirect to a method that displays a success page
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
    session['id_users'] = id_users
    session['greeting'] = request.form['first_name'] 

    return redirect('/success')

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
            session['id_users'] = result[0]['id_users']
            session['greeting'] = result[0]['first_name']
            return redirect('/success')
        else:
            flash("Email and password does not match.")
    else:
        flash("Email address has not been created.")
        return redirect('/')

@app.route('/success')
def success():
    if 'id_users' not in session:
        return redirect('/')
    else:
    return render_template('success.html')

if __name__=="__main__":      
    app.run(debug=True)  
  