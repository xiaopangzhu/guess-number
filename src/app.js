const AnswerGenerator = require('./models/answer-generator');
const CompareNumber = require('./models/compare-number');
const scanf = require('scanf');

class Game {

  static guessNumbers() {
    console.log(`Welcome`);
    const answer = AnswerGenerator.buildRandomNumbers();

    for (var i = 6; i > 0; i--) {
      console.log(`Please input your number${i}:`);
      let number = ``;

      while (1) {
        number = this.input();
        if (number.split('').every(this.isDiff)) {
          break;
        }
        console.log(`Cannot input duplicate numbers!`);return;
      }

      const compareResult = CompareNumber.compare(number, answer);

      if (compareResult === '4A0B') {
        console.log(`Congratulations!`);
        return;
      }

      if (i === 1) {
        console.log(`Game Over`);
        return;
      }

      console.log(compareResult);
    }
  }

  static input() {
    return scanf('%s');
  }

  static isDiff(value, index, array) {
    return array.indexOf(value) === index;
  }
}

//Game.guessNumbers();

module.exports = Game;

