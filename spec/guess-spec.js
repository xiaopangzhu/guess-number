const Guess = require('../src/models/guess');
const AnswerGenerator = require('../src/models/answer-generator');

describe('guess',()=>{
  it('should get correct guess',()=>{
    spyOn(AnswerGenerator,'buildRandomNumbers')
    .and.returnValue('1234');
    expect(Guess.guess('1234')).toEqual('4A0B');
  })
})