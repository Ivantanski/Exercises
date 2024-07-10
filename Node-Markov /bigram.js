/** Textual markov chain generator using bigrams. */

class MarkovMachine {
  /** build markov machine; read in text. */

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the cat": ["in"], "cat in": ["the"], "in the": ["hat"], "the hat": [null]} */

  makeChains() {
    this.chains = new Map();

    for (let i = 0; i < this.words.length - 1; i++) {
      let bigram = `${this.words[i]} ${this.words[i + 1]}`;
      let nextWord = this.words[i + 2] || null;

      if (this.chains.has(bigram)) {
        this.chains.get(bigram).push(nextWord);
      } else {
        this.chains.set(bigram, [nextWord]);
      }
    }
  }

  /** Pick random choice from array */
  
  choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // Pick a random key to begin
    let keys = Array.from(this.chains.keys());
    let key = this.choice(keys);
    let out = [];

    // Produce Markov chain until reaching termination word
    while (out.length < numWords && key !== null) {
      let [w1, w2] = key.split(" ");
      out.push(w1);
      let nextWords = this.chains.get(key);
      key = nextWords ? `${w2} ${this.choice(nextWords)}` : null;
    }

    return out.join(" ");
  }
}

module.exports = { MarkovMachine };
