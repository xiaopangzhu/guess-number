const Test = require('../src/models/test');

describe('test', ()=> {
  beforeEach(()=> {
    spyOn(console, 'log');
  })
  it('test', ()=> {
    Test.test();
    expect(console.log).toHaveBeenCalledWith(`1234`);
    expect(console.log).toHaveBeenCalledWith(`2345`);
  })
})