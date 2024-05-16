"""Madlibs Stories."""


class MadlibStory:
    """Madlibs story.

    To make a story, pass a code, a title, a list of prompts,
    and the text of the template.

        >>> s = MadlibStory(
        ...     "simple",
        ...     "A Simple Tale",
        ...     ["noun", "verb"],
        ...     "I love to {verb} a good {noun}.")

    To generate text from a story, pass in a dictionary-like thing
    of {prompt: answer, prompt: answer}:

        >>> ans = {"verb": "eat", "noun": "mango"}
        >>> s.generate(ans)
        'I love to eat a good mango.'
    """

    def __init__(self, code, title, prompts, template):
        """Create a story with prompts and template text."""
        self.code = code
        self.title = title
        self.prompts = prompts
        self.template = template

    def generate(self, answers):
        """Substitute answers into template text."""
        story_text = self.template
        for key, val in answers.items():
            story_text = story_text.replace(f"{{{key}}}", val)
        return story_text


# Instances of the MadlibStory class
historical_tale = MadlibStory(
    "history",
    "A History Tale",
    ["place", "noun", "verb", "adjective", "plural_noun"],
    """Once upon a time in a long-ago {place}, there lived a
       large {adjective} {noun}. It loved to {verb} {plural_noun}."""
)

excited_adventure = MadlibStory(
    "omg",
    "An Excited Adventure",
    ["noun", "verb"],
    """OMG!! OMG!! I love to {verb} a {noun}!"""
)

# Dictionary of stories
stories_collection = {story.code: story for story in [historical_tale, excited_adventure]}

# Example usage (optional)
if __name__ == "__main__":
    example_answers1 = {
        "place": "kingdom",
        "noun": "dragon",
        "verb": "hoard",
        "adjective": "fiery",
        "plural_noun": "treasures"
    }
    print(historical_tale.generate(example_answers1))

    example_answers2 = {"noun": "adventure", "verb": "embark on"}
    print(excited_adventure.generate(example_answers2))
