from flask import Flask, session, render_template, request, flash, redirect
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "not p@ssw0rd"
DATABASE = "fav_books"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

#books table
#id_books, title, description

#users table
#id_user, first_name, last_name, password, email, uploaded_by_id

#favorties
#fav_user_id, fav_book_id

@app.route ('/')
def homepage():
    return render_template('index.html')


@app.route ('/login', methods=['POST'])
def login():
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM users WHERE email = %(em)s ;"
    data = {
        "em": request.form['e_mail']
    }
    result = mysql.query_db(query, data)
    if len(result) > 0:
        if bcrypt.check_password_hash(result[0]['password'], request.form['p_word']):
            session['id_users'] = result[0]['id_users']
            session['greeting'] = result[0]['first_name']
            return redirect('/books')
        else:
            flash("Email and/or password does not match.")
            return redirect('/')
    else:
        flash("Please enter your registered Email.")
        return redirect('/')

    return redirect('/books')


@app.route ('/register', methods=['POST'])
def register():
    is_valid = True
    if len(request.form["f_name"]) < 2:
        is_valid = False
        flash('please enter first name.')
    if len(request.form["l_name"]) < 2:
        is_valid = False
        flash('please enter last name.')
    if len(request.form["p_word"]) < 8:
        is_valid = False
        flash('password is not long enough')
    if not EMAIL_REGEX.match(request.form['e_mail']):
        flash("Invalid email address!")
    if (request.form["p_word"] != request.form['confirm_password']):
        is_valid = False
        flash('passwords did not match.')
    if is_valid == False:
        return redirect ('/')
    else:
        flash('successful!')
        mysql = connectToMySQL(DATABASE)
        pw_hash = bcrypt.generate_password_hash(request.form['p_word'])
        query = "INSERT INTO users (first_name, last_name, password, email) VALUES(%(fn)s, %(ln)s, %(pw)s, %(em)s);"
        data = {
            "fn": request.form["f_name"],
            "ln": request.form["l_name"],
            "pw": pw_hash,
            "em": request.form["e_mail"]
            }
        
        session['username'] = request.form['f_name']
    return redirect('/books')


@app.route ('/books')
def books_page():
    return render_template ('books.html')

@app.route ('/logout')
def logout():
    session.clear()
    return redirect('/')

if __name__=="__main__":      
    app.run(debug=True)  
