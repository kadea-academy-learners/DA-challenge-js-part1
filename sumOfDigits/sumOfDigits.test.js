const sumOfDigits = require('./sumOfDigits');


describe('somme des chiffres d\'un nombre', () => {
    test('Nombre à un seul chiffre', () => {
        expect(sumOfDigits(5)).toBe(5);
    });

    test('Nombre à plusieurs chiffres', () => {
        expect(sumOfDigits(123)).toBe(6);
    });

    test('Nombre négatif', () => {
        expect(sumOfDigits(-456)).toBe(15);
    });

    test('Zéro', () => {
        expect(sumOfDigits(0)).toBe(0);
    });

    test('Grand nombre', () => {
        expect(sumOfDigits(987654321)).toBe(45);
    });

    test('Nombre avec des chiffres répétés', () => {
        expect(sumOfDigits(111)).toBe(3);
    });

    test('Nombre avec un seul chiffre répété plusieurs fois', () => {
        expect(sumOfDigits(9999)).toBe(36);
    });

    test('Nombre avec des zéros intercalés', () => {
        expect(sumOfDigits(303)).toBe(6);
    });

    test('Nombre avec des chiffres décimaux', () => {
        expect(sumOfDigits(123.45)).toBe(15);
    });

    test('Nombre avec un seul chiffre décimal', () => {
        expect(sumOfDigits(6.7)).toBe(13);
    });

});