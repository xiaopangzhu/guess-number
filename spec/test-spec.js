const CompareNumber = require('../src/models/compareNumber');

describe('guess number',()=>{
  it('build ×A×B',()=>{
    const expected = '4A0B';
    const compareNumber = new CompareNumber('1234','1234');
    expect(compareNumber.build()).toEqual(expected);
  })

  it('build ×A×B',()=>{
    const expected = '0A4B';
    const compareNumber = new CompareNumber('1234','4321');
    expect(compareNumber.build()).toEqual(expected);
  })

  it('build ×A×B',()=>{
    const expected = '2A1B';
    const compareNumber = new CompareNumber('1234','1354');
    expect(compareNumber.build()).toEqual(expected);
  })
})