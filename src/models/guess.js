const CompareNumber = require('./compare-number');
const AnswerGenerator = require('./answer-generator');

class Guess{
  static guess(input){
    const randomNumber = AnswerGenerator.buildRandomNumbers();
    return CompareNumber.compare(input,randomNumber)
  }
}

module.exports = Guess;