const isPerfectNumber = require('./perfectNumber');

describe('Nombre parfait', () => {

// Cas de test pour un nombre parfait
    test('Nombre parfait - cas normal', () => {
        expect(isPerfectNumber(28)).toBe(true);
    });

// Cas de test pour un nombre non parfait
    test('Nombre non parfait - cas normal', () => {
        expect(isPerfectNumber(12)).toBe(false);
    });

// Cas de test pour un nombre négatif
    test('Nombre négatif', () => {
        expect(isPerfectNumber(-28)).toBe(false);
    });

// Cas de test pour zéro (0)
    test('Zéro', () => {
        expect(isPerfectNumber(0)).toBe(false);
    });

// Cas de test pour un grand nombre parfait
    test('Grand nombre parfait', () => {
        expect(isPerfectNumber(33550336)).toBe(true);
    });

// Cas de test pour un grand nombre non parfait
    test('Grand nombre non parfait', () => {
        expect(isPerfectNumber(123456789)).toBe(false);
    });

// Cas de test pour un nombre premier
    test('Nombre premier', () => {
        expect(isPerfectNumber(17)).toBe(false);
    });

// Cas de test pour un nombre avec un seul diviseur
    test('Nombre avec un seul diviseur', () => {
        expect(isPerfectNumber(1)).toBe(false);
    });

// Cas de test pour un nombre avec plusieurs diviseurs
    test('Nombre avec plusieurs diviseurs', () => {
        expect(isPerfectNumber(6)).toBe(true);
    });

// Cas de test pour un nombre pair non parfait
    test('Nombre pair non parfait', () => {
        expect(isPerfectNumber(16)).toBe(false);
    });
});