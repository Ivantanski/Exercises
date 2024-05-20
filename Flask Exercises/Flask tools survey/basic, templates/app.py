from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

# Constants for session keys
RESPONSES_KEY = "responses"

app = Flask(__name__)
app.config['SECRET_KEY'] = "super-secret-key!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

@app.route("/")
def survey_start():
    """Display the survey start page."""
    return render_template("survey_start.html", survey=survey)

@app.route("/begin", methods=["POST"])
def begin_survey():
    """Initialize the session with an empty list of responses and redirect to the first question."""
    session[RESPONSES_KEY] = []
    return redirect("/questions/0")

@app.route("/answer", methods=["POST"])
def save_answer():
    """Save the current answer and redirect to the next question."""
    answer = request.form['answer']

    responses = session.get(RESPONSES_KEY, [])
    responses.append(answer)
    session[RESPONSES_KEY] = responses

    if len(responses) == len(survey.questions):
        return redirect("/complete")
    else:
        return redirect(f"/questions/{len(responses)}")

@app.route("/questions/<int:qid>")
def display_question(qid):
    """Show the current question."""
    responses = session.get(RESPONSES_KEY)

    if responses is None:
        return redirect("/")

    if len(responses) == len(survey.questions):
        return redirect("/complete")

    if len(responses) != qid:
        flash(f"Invalid question ID: {qid}.")
        return redirect(f"/questions/{len(responses)}")

    question = survey.questions[qid]
    return render_template("question.html", question_num=qid, question=question)

@app.route("/complete")
def survey_complete():
    """Display the completion page."""
    return render_template("completion.html")

if __name__ == "__main__":
    app.run(debug=True)
