const AnswerGenerator = require('../src/models/answer-generator');

describe('guess number',()=>{

  it('get 4 random numbers',()=>{

    const isDiff = (value,index,array)=>{
      return array.lastIndexOf(value) === index;
    };
    const answer = AnswerGenerator.buildRandomNumbers();
    expect(answer.length).toEqual(4);
    expect(answer.split('').every(isDiff)).toBe(true);
    expect(AnswerGenerator.buildRandomNumbers()).not.toEqual(AnswerGenerator.buildRandomNumbers());
  })

})