from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "something secret10"
DATABASE = "private_wall"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

#users
# id_users, email, password, created_at, updated_at, first_name, last_name

#messages
#id_messages, content, created_at, updated_at, to_user, from_user

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

    return redirect('/wall')

@app.route ("/name", methods=['POST'])
def username():
    found = False
    mysql = connectToMySQL(DATABASE)
    query = "SELECT first_name FROM users WHERE first_name = %(first_name_key)s;"
    data = { 'first_name_key': request.form['first_name']}
    result = mysql.query_db(query, data)
    print("CAN YOU FIND ME _________")
    if result:
        found = True
    return render_template('partials/username.html', found=found)

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
            return redirect('/wall')
        else:
            flash("Email and/or password does not match.")
            return redirect('/')
    else:
        flash("Please enter your registered Email.")
        return redirect('/')

@app.route('/success')
def success():
    if 'id_users' not in session:
        return redirect('/')
    else:
        return render_template('success.html')

@app.route('/wall')
def wall():
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM users;"
    all_user = mysql.query_db(query)

    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM messages WHERE to_user = %(id)s;"
    data = {
        'id': session['id_users']
    }
    all_messages = mysql.query_db(query, data)

    return render_template('wall.html', users = all_user, messages = all_messages)

@app.route('/create', methods=['POST'])
def create():
    is_valid = True

    if len(request.form['content']) < 5:
        flash("Messages are required to be longer than 5 characters.")
        is_valid == False

    if is_valid == True: 
        mysql = connectToMySQL(DATABASE)
        query = "INSERT INTO messages (content,to_user,from_user) VALUES (%(msg)s, %(to)s, %(from)s);"
        data = {
            'msg': request.form['content'],
            'to': request.form['to_user'],
            'from': session['id_users']
        }
        mysql.query_db(query, data)

    return redirect('/wall')

@app.route('/delete/<id>/<thing>')
def delete(id,thing):
    if session['id_users'] == int(thing):
        mysql = connectToMySQL(DATABASE)
        query = "DELETE FROM messages WHERE id_messages = %(id)s;"
        data = {
        'id': id
        }   
        mysql.query_db(query, data)
        return redirect('/wall')
    else:
        return redirect('/')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

if __name__=="__main__":      
    app.run(debug=True)  

#1) Query to grab one message, store in variable.  
#2) Compare session[‘user_id’] with message[‘from_user’] 
#3) If comparison passes, delete message
