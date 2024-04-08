const countVowels = require('./countVowels');

describe('Nombre de voyelles dans une chaîne de caractères', () => {


    test('Chaîne de caractères avec des voyelles minuscules', () => {
        expect(countVowels('hello')).toBe(2);
    });

    test('Chaîne de caractères avec des voyelles majuscules', () => {
        expect(countVowels('WORLD')).toBe(1);
    });

    test('Chaîne de caractères avec des voyelles minuscules et majuscules', () => {
        expect(countVowels('Hello World')).toBe(3);
    });

    test('Chaîne de caractères sans voyelles', () => {
        expect(countVowels('xrtpz')).toBe(0);
    });

    test('Chaîne de caractères vide', () => {
        expect(countVowels('')).toBe(0);
    });

    test('Chaîne de caractères avec des voyelles accentuées', () => {
        expect(countVowels('café')).toBe(2);
    });

    test('Chaîne de caractères avec des voyelles et des consonnes spéciales', () => {
        expect(countVowels('héllö wörld')).toBe(3);
    });

    test('Chaîne de caractères avec des voyelles et des espaces', () => {
        expect(countVowels('hello world')).toBe(3);
    });

    test('Chaîne de caractères avec une seule voyelle répétée', () => {
        expect(countVowels('aaaaaa')).toBe(6);
    });

    test('Chaîne de caractères avec des voyelles et des chiffres', () => {
        expect(countVowels('hello123')).toBe(2);
    });

});