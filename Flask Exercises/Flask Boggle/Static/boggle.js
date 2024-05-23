class BoggleGame {
  /* Create a new game with the specified boardId and a default timer duration */

  constructor(boardId, secs = 60) {
    this.secs = secs; // Game duration in seconds
    this.score = 0;
    this.words = new Set();
    this.board = $("#" + boardId);

    this.showTimer();

    // Tick every second
    this.timer = setInterval(this.tick.bind(this), 1000);

    $(".add-word", this.board).on("submit", this.handleSubmit.bind(this));
  }

  /* Display the word in the list of found words */

  showWord(word) {
    $(".words", this.board).append($("<li>", { text: word }));
  }

  /* Display the current score */

  showScore() {
    $(".score", this.board).text(this.score);
  }

  /* Display a status message */

  showMessage(msg, cls) {
    $(".msg", this.board)
      .text(msg)
      .removeClass()
      .addClass(`msg ${cls}`);
  }

  /* Handle the submission of a word */

  async handleSubmit(evt) {
    evt.preventDefault();
    const $wordInput = $(".word", this.board);
    let word = $wordInput.val();

    if (!word) return;

    if (this.words.has(word)) {
      this.showMessage(`Already found ${word}`, "err");
      return;
    }

    // Check word validity with the server
    const resp = await axios.get("/check-word", { params: { word: word }});
    if (resp.data.result === "not-word") {
      this.showMessage(`${word} is not a valid English word`, "err");
    } else if (resp.data.result === "not-on-board") {
      this.showMessage(`${word} is not a valid word on this board`, "err");
    } else {
      this.showWord(word);
      this.score += word.length;
      this.showScore();
      this.words.add(word);
      this.showMessage(`Added: ${word}`, "ok");
    }

    $wordInput.val("").focus();
  }

  /* Update the timer display */

  showTimer() {
    $(".timer", this.board).text(this.secs);
  }

  /* Handle the ticking of the timer */

  async tick() {
    this.secs -= 1;
    this.showTimer();

    if (this.secs === 0) {
      clearInterval(this.timer);
      await this.scoreGame();
    }
  }

  /* End the game and submit the score */

  async scoreGame() {
    $(".add-word", this.board).hide();
    const resp = await axios.post("/post-score", { score: this.score });
    if (resp.data.brokeRecord) {
      this.showMessage(`New record: ${this.score}`, "ok");
    } else {
      this.showMessage(`Final score: ${this.score}`, "ok");
    }
  }
}
