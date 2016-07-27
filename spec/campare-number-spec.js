const CompareNumber = require('../src/models/compare-number');

describe('compareNumber',()=>{
  it('compare ×A×B',()=>{
    const expected = '4A0B';
    const input = '1234';
    const result = '1234';
    expect(CompareNumber.compare(input,result)).toEqual(expected);
  })

  it('compare ×A×B',()=>{
    const expected = '0A4B';
    const input = '1234';
    const result = '4321';
    expect(CompareNumber.compare(input,result)).toEqual(expected);
  })

  it('compare ×A×B',()=>{
    const expected = '2A1B';
    const input = '1234';
    const result = '1354';
    expect(CompareNumber.compare(input,result)).toEqual(expected);
  })
})