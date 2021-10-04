var bs = require('./binaryserach')

test('index of 4 in [1,2,3,4,5,6] should be 3', ()=>{
    expect(bs([1,2,3,4,5,6],4)).toBe(3)
})

test('index of 2 in [1,2,3,4,5,6] should not be 0',()=>{
    expect(bs([1,2,3,4,5,6],2)).not.toBe(3)
})

test('index of 7 in [1,2,3,4,5,6] should not be -1',()=>{
    expect(bs([1,2,3,4,5,6],7)).toBe(-1)
})