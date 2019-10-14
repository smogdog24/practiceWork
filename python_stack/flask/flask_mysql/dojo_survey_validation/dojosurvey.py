from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = "something secret1"
DATABASE = "dojo_survey_validation"

@app.route('/')
def form_input():
    return render_template('dojosurvey_input.html')

@app.route('/process', methods=['POST'])
def process():
    is_valid = True		# assume True
    if len(request.form['user_name']) < 1:
    	is_valid = False
    	flash("please enter your name")
    if len(request.form['user_location']) < 1:
    	is_valid = False
    	flash("please select your location")
    if len(request.form['user_fav_language']) < 2:
    	is_valid = False
    	flash("please select your favorite language")
    if len(request.form['user_comments']) < 2:
    	is_valid = False
    	flash("please leave a comment")
    
    if not is_valid:    # if any of the fields switched our is_valid toggle to False
        return redirect('/')    # redirect back to the method that displays the index page
    else:               # if is_valid is still True, all validation checks were passed
        flash("sucessfully added")
    	# add user to database
        # display success message
        # redirect to a method that displays a success page
    mysql = connectToMySQL(DATABASE)
    query = "INSERT INTO surveys (name, location, language, comment) VALUES (%(nm)s, %(lc)s, %(lg)s, %(cm)s);"
    data = {
        "nm": request.form['user_name'],
        "lc": request.form['user_location'],
        "lg": request.form['user_fav_language'],
        "cm": request.form["user_comments"]
    }
    user_name = mysql.query_db(query, data)
    return redirect('/results')

@app.route('/results')
def results():
    mysql = connectToMySQL(DATABASE)
    query = "SELECT * FROM surveys ORDER BY id_survey DESC limit 1"

    user_name = mysql.query_db(query)
    return render_template("dojosurvey_results.html", user_name=user_name[0])


if __name__=="__main__":      
    app.run(debug=True)  
 