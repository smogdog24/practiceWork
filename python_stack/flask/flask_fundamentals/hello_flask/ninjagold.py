from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():
    if 'totalgold' not in session:
        session['totalgold'] = 0
    
    return render_template("ninjagoldtemplate.html")
@app.route('/process_money', methods=['POST'])
def process_money():
    if request.form['building'] == 'FARM':
        session['totalgold']+=(random.randrange(10, 20))
    if request.form['building'] == 'CAVE':
        session['totalgold']+=(random.randrange(5, 10))
    if request.form['building'] == 'HOUSE':
        session['totalgold']+=(random.randrange(2, 5))
    if request.form['building'] == 'CASINO':
        if random.randrange(1, 3) % 2 == 0:
            session['totalgold']-=(random.randrange(0, 50))
        else:
            session['totalgold']+=(random.randrange(0, 50))
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
