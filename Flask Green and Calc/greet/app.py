from flask import Flask, render_template

app = Flask(__name__)

@app.route('/welcome')
def welcome():
    return render_template('welcome.html', message='Welcome')

@app.route('/welcome/back')
def welcome_back():
    return render_template('welcome.html', message='Welcome back')

@app.route('/welcome/home')
def welcome_home():
    return render_template('welcome.html', message='Welcome home')
