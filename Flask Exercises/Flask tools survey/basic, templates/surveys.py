class Question:
    """Represents a single question in a survey."""

    def __init__(self, text, options=None, allow_text_response=False):
        """Initialize the question with text, optional choices, and text response allowance."""

        if options is None:
            options = ["Yes", "No"]

        self.text = text
        self.options = options
        self.allow_text_response = allow_text_response


class Survey:
    """Represents a complete survey with multiple questions."""

    def __init__(self, title, description, questions):
        """Initialize the survey with a title, description, and list of questions."""

        self.title = title
        self.description = description
        self.questions = questions


customer_satisfaction_survey = Survey(
    "Customer Satisfaction Survey",
    "Please fill out this survey about your experience with us.",
    [
        Question("Have you shopped here before?"),
        Question("Did someone else shop with you today?"),
        Question("On average, how much do you spend a month on frisbees?",
                 options=["Less than $10,000", "$10,000 or more"]),
        Question("Are you likely to shop here again?"),
    ]
)

personality_test = Survey(
    "Rithm Personality Test",
    "Learn more about yourself with our personality quiz!",
    [
        Question("Do you ever dream about code?"),
        Question("Do you ever have nightmares about code?"),
        Question("Do you prefer porcupines or hedgehogs?",
                 options=["Porcupines", "Hedgehogs"]),
        Question("Which is the worst function name, and why?",
                 options=["do_stuff()", "run_me()", "wtf()"],
                 allow_text_response=True),
    ]
)

available_surveys = {
    "satisfaction": customer_satisfaction_survey,
    "personality": personality_test,
}
