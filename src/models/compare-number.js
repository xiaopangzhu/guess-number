class CompareNumber {

  static build(input,result) {
    const inputs = input.split('');
    const results = result.split('');

    const calculateCorrcectCount = (inputs, results)=> {
      return inputs
        .map(input => results[inputs.indexOf(input)] === input ? 1 : 0)
        .reduce((a, b)=>a + b);
    }
    const correctCount = calculateCorrcectCount(inputs, results);

    const calculateErrorCount = (inputs, results, correctCount)=> {
      const sameCount = inputs
        .map(input => results.some(b => b === input) ? 1 : 0)
        .reduce((a, b)=>a + b);
      return sameCount - correctCount;
    }
    const errorCount = calculateErrorCount(inputs, results, correctCount);

    return `${correctCount}A${errorCount}B`;
  }
}

module.exports = CompareNumber;