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

test('should return 7 for the number 7', () => {
    expect(fb(7)).toEqual(7);
});

test('should return "Fizz" for the number 3', () => {
    expect(fb(3)).toEqual('Fizz');
    expect(fb(6)).toEqual('Fizz');
    expect(fb(21)).toEqual('Fizz');
  });