var fb = require('./fizzbuzz')

test('15 should contain FizzBuzz', ()=>{
    expect(fb(15)).toContain('FizzBuzz')
})

test('10 should not euqal to FizzBuzz', ()=>{
    expect(fb(10)).not.toEqual('FizzBuzz')
})

test("should return 'fizzbuzz' if the the number passed in is divisible by 3 and 5", () => {
    expect(fb(15)).toEqual("FizzBuzz");
    expect(fb(30)).toEqual("FizzBuzz");
    expect(fb(45)).toEqual("FizzBuzz");
});

test('should return buzz if the the number passed in is divisible by 5', ()=>{
    expect(fb(5)).toEqual('Buzz');
    expect(fb(25)).toEqual('Buzz');
    expect(fb(20)).toEqual('Buzz')
})