# Exercise 1

def print_upper_words(words):
    """Print each word on sep line, uppercased.

        >>> print_upper_words(["Programming", "is", "pretty", "fun"])
        PROGRAMMING
        IS
        PRETTY
        FUN
    """
    for word in words:
        print(word.upper())


# Exercise 2
    
   def print_upper_words2(words):
    """Print each word on sep line, uppercased, if starts with E or e.

        >>> print_upper_words2(["eagle", "Edward", "Alfred"])
        EAGLE
        EDWARD
    """

    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())


# Exercise 3
    
def print_upper_words3(words, must_start_with):
    """Print each word on sep line, uppercased, if starts with one of given

        >>> print_upper_words3(["eagle", "Edward", "Alfred", "zope"],
        ...                   must_start_with=["A", "E"])
        EDWARD
        ALFRED
    """


    for word in words:
        if any(word.lower().startswith(letter.lower()) for letter in must_start_with):
             print(word.upper())

def print_upper_words3(words, must_start_with):
    """Print each word on a separate line, uppercased, if it starts with one of the given letters.

    >>> print_upper_words3(["eagle", "Edward", "Alfred", "zope"],
    ...                     must_start_with=["A", "E"])
    EDWARD
    ALFRED
    """
    for word in words:
        if any(word.lower().startswith(letter.lower()) for letter in must_start_with):
            print(word.upper())
