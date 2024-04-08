const isLeapYear = require('./leapYear');

describe('Année bissextile', () => {
    test('Année bissextile - divisible par 4 mais non par 100', () => {
        expect(isLeapYear(2008)).toBe(true);
    });

    test('Année non bissextile', () => {
        expect(isLeapYear(2009)).toBe(false);
    });

    test('Année bissextile - divisible par 400', () => {
        expect(isLeapYear(2000)).toBe(true);
    });

    test('Année non bissextile - divisible par 4 mais non par 100', () => {
        expect(isLeapYear(1900)).toBe(false);
    });

    test('Année bissextile - divisible par 4, 100 et 400', () => {
        expect(isLeapYear(1600)).toBe(true);
    });

    test('Année négative', () => {
        expect(isLeapYear(-200)).toBe(false);
    });

    test('Année nulle', () => {
        expect(isLeapYear(0)).toBe(true);
    });

    test('Année bissextile future', () => {
        expect(isLeapYear(2024)).toBe(true);
    });

    test('Année non bissextile future', () => {
        expect(isLeapYear(2025)).toBe(false);
    });

    test('Année bissextile passée', () => {
        expect(isLeapYear(1904)).toBe(true);
    });
});