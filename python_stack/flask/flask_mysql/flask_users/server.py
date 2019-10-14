from flask import Flask, request, redirect, render_template
from mysqlconnection import connectToMySQL
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/add_user", methods=["POST"])
def add_user():
    mysql = connectToMySQL('flask_users')

    query = "INSERT INTO users (first_name, last_name, email) VALUES (%(fn)s, %(ln)s, %(em)s);"
    data = {
        "fn": request.form["f_name"],
        "ln": request.form["l_name"],
        "em": request.form["email"]
    }
    id = mysql.query_db(query, data) # this will be used to redirect to pages based on this ID
    return redirect(f'/show_user/{id}')

@app.route("/all_users")
def all_users():
    mysql = connectToMySQL('flask_users')
    users = mysql.query_db('SELECT * FROM users;')
    return render_template("all_users.html", all_users = users)

@app.route("/show_user/<id>")
def show_user(id):
    mysql = connectToMySQL('flask_users')
    query = "SELECT * From users WHERE id_user = %(id)s"
    data ={ 
        'id' : id
        }
    user_stuff = mysql.query_db(query, data)
    print("*"*80)
    print(user_stuff)
    print("*"*80)
    return render_template('show_user.html', user = user_stuff[0])

@app.route("/show_user/<id>/edit")
def edit(id):
    mysql = connectToMySQL('flask_users')
    query = "SELECT * From users WHERE id_user = %(id)s"
    data ={ 
        'id' : id
        }
    user_stuff = mysql.query_db(query, data)
    return render_template('edit_user.html', coffee = user_stuff[0])

@app.route("/show_user/<id>/update", methods=["POST"])
def update(id):
    mysql = connectToMySQL('flask_users')

    query = "UPDATE users Set first_name = %(fn)s, last_name = %(ln)s , email = %(em)s) WHERE id_user = %(id)s;"
    data = {
        "fn": request.form["f_name"],
        "ln": request.form["l_name"],
        "em": request.form["email"],
        'id' : id
    }
    id = mysql.query_db(query, data)
    return redirect(f'/all_users/{id}')

@app.route("/show_user/<id>/delete")
def delete(id):
    mysql = connectToMySQL('flask_users')
    query = "DELETE FROM users WHERE id_user = %(id)s;"
    data = {
        'id': id
    }
    mysql.query_db(query,data)
    return redirect('/all_users')


if __name__ == "__main__":
    app.run(debug=True)