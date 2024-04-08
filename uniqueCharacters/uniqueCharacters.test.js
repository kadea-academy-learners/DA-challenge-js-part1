const hasUniqueCharacters = require('./uniqueCharacters');

describe('Vérification de la présence de caractères uniques', () => {
    test('Chaîne avec des caractères uniques', () => {
        expect(hasUniqueCharacters('abcdefg')).toBe(true);
    });

    test('Chaîne avec des caractères répétés', () => {
        expect(hasUniqueCharacters('hello')).toBe(false);
    });

    test('Chaîne vide', () => {
        expect(hasUniqueCharacters('')).toBe(true);
    });

    test('Une lettre', () => {
        expect(hasUniqueCharacters('a')).toBe(true);
    });

    test('Chaîne avec des espaces', () => {
        expect(hasUniqueCharacters('hello world')).toBe(false);
    });

    test('Chaîne avec des caractères spéciaux', () => {
        expect(hasUniqueCharacters('!@#$%^&*')).toBe(true);
    });

    test('Chaîne avec des majuscules et minuscules', () => {
        expect(hasUniqueCharacters('aBcDeF')).toBe(true);
    });

    test('Chaîne avec des caractères accentués', () => {
        expect(hasUniqueCharacters('éèà')).toBe(true);
    });

    test('Chaîne avec des nombres', () => {
        expect(hasUniqueCharacters('123456')).toBe(true);
    });

    test('Chaîne avec des caractères mixtes', () => {
        expect(hasUniqueCharacters('ab#1c!')).toBe(true);
    });
});