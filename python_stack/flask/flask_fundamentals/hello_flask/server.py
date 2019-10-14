from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'DOJO!'

@app.route("/say/<something>")
def say(something):
    return f"Hi {something}!"

if __name__=="__main__":      
    app.run(debug=True)  