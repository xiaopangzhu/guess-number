const Guess = require('./models/guess');
const AnswerGenerator = require('./models/answer-generator');
const CompareNumber = require('./models/compare-number');

const scanf = require('scanf');

function guessNumbers() {
  console.log(`Welcome`);
  const answer = AnswerGenerator.buildRandomNumbers();
  for (var i = 6; i > 0; i--) {
    console.log('\nPlease input your number([%d]):', i);
    const number = scanf('%s');
    const compareResult = CompareNumber.build(number,answer);
    if (compareResult.slice(0,1) === '4') {
      console.log('Congratulations!');return;
    }
    if (i === 1) {
      console.log('Game Over');return;
    }
    console.log(compareResult);
  }
}

guessNumbers();


