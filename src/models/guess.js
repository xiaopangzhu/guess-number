const CompareNumber = require('./compare-number');
const AnswerGenerator = require('./answer-generator');

class Guess{
  static guess(input){
    const randomNumber = AnswerGenerator.buildRandomNumbers();
    return CompareNumber.build(input,randomNumber)
  }
}

module.exports = Guess;