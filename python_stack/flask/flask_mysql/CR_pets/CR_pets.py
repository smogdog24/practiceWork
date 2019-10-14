from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL    # import the function that will return an instance of a connection
app = Flask(__name__)

@app.route("/")
def index():
    mysql = connectToMySQL('CR_pets')
    pets = mysql.query_db('SELECT * FROM pets;')
    return render_template("index.html", all_pets = pets)

@app.route("/add_pet", methods=['POST'])
def create_pet():
    mysql = connectToMySQL('CR_pets')

    query = "INSERT INTO pets (name, type) VALUES (%(nm)s, %(tp)s);"
    data = {
        "nm": request.form["name"],
        "tp": request.form["type"]
    }
    new_pet_id = mysql.query_db(query, data)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)