from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play')
def play():
    return render_template('playground.html', num_square=3, client_color='lightskyblue')

@app.route("/play/<numx>")
def moreBoxes(numx):
    return render_template('playground.html', num_square=int(numx))

@app.route("/play/<numx>/<color>")
def moreBoxes_color(numx,color):
    return render_template('playground.html', num_square=int(numx), client_color=color)

if __name__=="__main__":      
    app.run(debug=True)  