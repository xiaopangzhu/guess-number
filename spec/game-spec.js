const AnswerGenerator = require('../src/models/answer-generator');
const Game = require('../src/app');

describe('guess number', ()=> {

  beforeEach(()=> {
    spyOn(AnswerGenerator, 'buildRandomNumbers').and.returnValue('1234');
    spyOn(console, 'log');
  })

  it('guess number repeat', ()=> {
    spyOn(Game, 'input').and.returnValue('1222');
    Game.guessNumbers();
    expect(console.log).toHaveBeenCalledWith(`Welcome`);
    expect(console.log).toHaveBeenCalledWith(`Please input your number6:`);
    expect(console.log).toHaveBeenCalledWith(`Cannot input duplicate numbers!`);
  })


  it('guess number successful', ()=> {
    spyOn(Game, 'input').and.returnValue('1234');
    Game.guessNumbers();
    expect(console.log).toHaveBeenCalledWith(`Welcome`);
    expect(console.log).toHaveBeenCalledWith(`Please input your number6:`);
    expect(console.log).toHaveBeenCalledWith(`Congratulations!`);
  })

  it('guess number fail', ()=> {
    spyOn(Game, 'input').and.returnValue('1253');
    Game.guessNumbers();
    expect(console.log).toHaveBeenCalledWith(`Welcome`);
    for (let i = 6; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(`Please input your number${i}:`);
      if (i === 1) {
        break;
      }
      expect(console.log).toHaveBeenCalledWith(`2A1B`);
    }
    expect(console.log).toHaveBeenCalledWith(`Game Over`);
  })

})