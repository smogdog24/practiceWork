from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)
app.secret_key = 'this is the secret key'

@app.route('/')
def home():
    if 'counter' in session and 'views' in session:
        session['counter'] += 1
        session['views'] += 1
    elif 'counter' not in session and 'views' in session:
            session['counter'] = 0
            session['views'] += 1
    else:
        session['counter'] = 0
        session['views'] = 0
    return render_template('index.html')

@app.route('/pop')
def pop():
    if 'counter' in session:
        session.pop('counter')
        session['views'] = session['views'] - 1
        
    return redirect('/')

@app.route('/clear')
def clear():
    if 'counter' in session and 'views' in session:
        session.clear()
        
    return redirect('/')

@app.route('/pluscounter')
def pluscounter():
    if 'counter' in session:
        session['counter'] += 1
        session['views'] = session['views'] - 1
    return redirect('/')

if __name__=="__main__":      
    app.run(debug=True) 