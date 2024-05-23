from flask import Flask, request, render_template, jsonify, session
from boggle import Boggle

app = Flask(__name__)
app.config["SECRET_KEY"] = "fdfgkjtjkkg45yfdb"

boggle_game = Boggle()

@app.route("/")
def homepage():
    """Show board."""
    board = boggle_game.make_board()
    session['board'] = board
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    return render_template("index.html", board=board,
                           highscore=highscore,
                           nplays=nplays)

@app.route("/check-word")
def check_word():
    """Check if word is in dictionary."""
    word = request.args["word"]
    board = session["board"]
    response = boggle_game.check_valid_word(board, word)

    return jsonify({'result': response})

@app.route("/post-score", methods=["POST"])
def post_score():
    """Receive score, update nplays, update high score if appropriate."""
    score = request.json["score"]
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    # Update the number of plays
    session['nplays'] = nplays + 1

    # Check if the new score is a high score and update if necessary
    broke_record = score > highscore
    if broke_record:
        session['highscore'] = score

    return jsonify(brokeRecord=broke_record)
