const fizzBuzz = require('./fizzBuzz');


describe('FizzBuzz', () => {

    test('Test avec N = 15', () => {
        expect(fizzBuzz(15)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz');
    });

    test('Test avec N = 1', () => {
        expect(fizzBuzz(1)).toBe('1');
    });

    test('Test avec N = 0', () => {
        expect(fizzBuzz(0)).toBe('');
    });

    test('Test avec N = 5', () => {
        expect(fizzBuzz(5)).toBe('1 2 Fizz 4 Buzz');
    });

    test('Test avec N = 10', () => {
        expect(fizzBuzz(10)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz');
    });

    test('Test avec N = 20', () => {
        expect(fizzBuzz(20)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz');
    });

    test('Test avec N = 3', () => {
        expect(fizzBuzz(3)).toBe('1 2 Fizz');
    });

    test('Test avec N = 7', () => {
        expect(fizzBuzz(7)).toBe('1 2 Fizz 4 Buzz Fizz 7');
    });

    test('Test avec N = 30', () => {
        expect(fizzBuzz(30)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz');
    });

    test('Test avec N = 50', () => {
        expect(fizzBuzz(50)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz');
    });
});