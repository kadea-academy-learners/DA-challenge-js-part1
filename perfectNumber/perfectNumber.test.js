const isPerfectNumber = require('./perfectNumber');

describe('Nombre parfait', () => {

    test('Nombre parfait - cas normal', () => {
        expect(isPerfectNumber(28)).toBe(true);
    });

    test('Nombre non parfait - cas normal', () => {
        expect(isPerfectNumber(12)).toBe(false);
    });

    test('Nombre négatif', () => {
        expect(isPerfectNumber(-28)).toBe(false);
    });

    test('Zéro', () => {
        expect(isPerfectNumber(0)).toBe(false);
    });

    test('Grand nombre parfait', () => {
        expect(isPerfectNumber(33550336)).toBe(true);
    });

    test('Grand nombre non parfait', () => {
        expect(isPerfectNumber(123456789)).toBe(false);
    });

    test('Nombre premier', () => {
        expect(isPerfectNumber(17)).toBe(false);
    });

    test('Nombre avec un seul diviseur', () => {
        expect(isPerfectNumber(1)).toBe(false);
    });

    test('Nombre avec plusieurs diviseurs', () => {
        expect(isPerfectNumber(6)).toBe(true);
    });

    test('Nombre pair non parfait', () => {
        expect(isPerfectNumber(16)).toBe(false);
    });
});