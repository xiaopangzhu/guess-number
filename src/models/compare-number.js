class CompareNumber {

  static compare(input,result) {
    const inputs = input.split('');
    const answers = result.split('');

    const correctCount =inputs.filter(input => inputs.indexOf(input)===answers.indexOf(input)).length;
    const sameNumberCount = inputs.filter(input => answers.some(a => a === input)).length;

    const errorCount = sameNumberCount-correctCount;

    return `${correctCount}A${errorCount}B`;
  }
}

module.exports = CompareNumber;