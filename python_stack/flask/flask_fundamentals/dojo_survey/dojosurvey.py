from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def form_input():
    return render_template('dojosurvey_input.html')

@app.route('/results', methods=['POST'])
def form_results():
    print(request.form)
    user_name = request.form['user_name']
    user_location = request.form['user_location']
    user_fav_language = request.form['user_fav_language']
    user_comments = request.form["user_comments"]
    return render_template('dojosurvey_results.html', user_name=user_name, user_location=user_location, user_fav_language=user_fav_language, user_comments=user_comments)


if __name__=="__main__":      
    app.run(debug=True)  
 