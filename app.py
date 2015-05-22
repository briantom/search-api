#Similar to the way that you need to import node/express in node.js
from flask import Flask, render_template
#spins up an instance of Flask with the application name as arg
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

#if this is a main application, then start up
#the flask server.(call run)
if __name__ == '__main__':
    app.run()