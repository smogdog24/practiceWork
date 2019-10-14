from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "something secret10"
DATABASE = "exam_quote_dash"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

#users
# id_users, first_name, last_name, email, password

#quotes
#id_quotes, from_user, liked_from, content, author

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

    return redirect('/quotes')

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
            return redirect('/quotes')
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

@app.route('/quotes')
def quotes():
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM quotes JOIN users ON from_user = id_users;"
    join = mysql.query_db(query)

    return render_template('quotes.html', joined = join)

@app.route('/create', methods=['POST'])
def create():
    is_valid = True

    if len(request.form['content']) < 10:
        flash("quotes are required to be longer than 10 characters.")
        is_valid == False

    if is_valid == True: 
        mysql = connectToMySQL(DATABASE)
        query = "INSERT INTO quotes (content, author, from_user) VALUES (%(quo)s, %(auth)s, %(from)s);"
        data = {
            'quo': request.form['content'],
            'auth': request.form['author'],

            'from': session['id_users']
        }
        mysql.query_db(query, data)

    return redirect('/quotes')

@app.route('/delete/<id>/<thing>')
def delete(id,thing):
    if session['id_users'] == int(thing):
        mysql = connectToMySQL(DATABASE)
        query = "DELETE FROM quotes WHERE id_quotes = %(id)s;"
        data = {
        'id': id
        }   
        mysql.query_db(query, data)
        return redirect('/quotes')
    else:
        flash("Unable to delete other's quotes")
        return redirect('/quotes')

@app.route("/edit")
def edit():
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * From users WHERE id_users = %(id)s"
    data ={ 
        'id' : session['id_users']
        }
    users_table = mysql.query_db(query, data)


    return render_template('edit_account.html', users = users_table)

@app.route("/update", methods=["POST"])
def update():
    is_valid = True
    if len(request.form['f_name']) < 3:
    	is_valid = False
    	flash("please enter your first name.")
    if len(request.form['l_name']) < 3:
    	is_valid = False
    	flash("please enter your last name.")
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address!")
    if not is_valid:
        return redirect('/edit')
    else:
        flash("sucessfully updated")
        mysql = connectToMySQL(DATABASE)
        query = "UPDATE users Set first_name = %(fn)s, last_name = %(ln)s , email = %(em)s WHERE id_users = %(id)s;"
        data = {
            "fn": request.form["f_name"],
            "ln": request.form["l_name"],
            "em": request.form["email"],
            'id' : session['id_users']
            }
        id = mysql.query_db(query, data)

        session['greeting'] = request.form['f_name']  
    return redirect('/quotes')

@app.route("/my_posts")
def my_post():
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM quotes WHERE from_user = %(id)s;"
    data ={ 
        'id' : session['id_users']
        }
    my_quotes = mysql.query_db(query, data)

    return render_template('my_posts.html', quotes = my_quotes)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

if __name__=="__main__":      
    app.run(debug=True)  