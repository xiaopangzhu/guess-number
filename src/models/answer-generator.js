class AnswerGenerator {
  static buildRandomNumbers() {
    const numbers = [];
    while (numbers.length < 4) {
      const number = parseInt(Math.random() * 10);
      if (!numbers.some(ele => ele === number)) {
        numbers.push(number);
      }
    }
    return numbers.join('');
  }

}

module.exports = AnswerGenerator;