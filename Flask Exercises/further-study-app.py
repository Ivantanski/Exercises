from flask import Flask, render_template, request, redirect, url_for
from flask_debugtoolbar import DebugToolbarExtension
from stories import stories

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret"

debug = DebugToolbarExtension(app)

@app.route("/", methods=["GET"])
def ask_story():
    """Show list-of-stories form."""

    return render_template("select-story.html",
                           stories=stories.values())

@app.route("/questions", methods=["GET"])
def ask_questions():
    """Generate and show form to ask words."""

    story_id = request.args["story_id"]
    story = stories[story_id]

    prompts = story.prompts

    return render_template("questions.html",
                           story_id=story_id,
                           title=story.title,
                           prompts=prompts)

@app.route("/story", methods=["GET"])
def show_story():
    """Show story result."""

    story_id = request.args["story_id"]
    story = stories[story_id]

    text = story.generate(request.args)

    return render_template("story.html",
                           title=story.title,
                           text=text)

@app.route("/questions", methods=["POST"])
def submit_questions():
    """Handle form submission of answers to prompts."""

    story_id = request.form["story_id"]
    story = stories[story_id]

    # Process user's answers to prompts here
    # ...

    # Redirect to story page
    return redirect(url_for("show_story", story_id=story_id))
