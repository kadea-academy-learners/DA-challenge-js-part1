const squareRoot = require('./squareRoot');


describe('Racine carrée d\'un nombre', () => {
    test('Type de retour', () => {
        expect(typeof squareRoot(9)).toBe('number');
    });

    test('Racine carrée d\'un nombre positif', () => {
        expect(squareRoot(9)).toBe(3);
    });

    test('Racine carrée de zéro', () => {
        expect(squareRoot(0)).toBe(0);
    });

    test('Racine carrée d\'un nombre négatif', () => {
        expect(squareRoot(-25)).toBeNaN();
    });

    test('Racine carrée d\'un nombre décimal', () => {
        expect(squareRoot(16.25)).toBeCloseTo(4.03112887);
    });

    test('Racine carrée d\'un grand nombre', () => {
        expect(squareRoot(123456789)).toBeCloseTo(11111.11106);
    });

    test('Racine carrée d\'un nombre très petit', () => {
        expect(squareRoot(1e-10)).toBeCloseTo(1e-5);
    });

    test('Racine carrée d\'un nombre nul avec signe négatif', () => {
        expect(squareRoot(-0)).toBe(0);
    });

    test('Racine carrée d\'un nombre entier très grand', () => {
        expect(squareRoot(1e18)).toBeCloseTo(1e9);
    });

    test('Racine carrée d\'un nombre négatif très grand', () => {
        expect(squareRoot(-1e18)).toBeNaN();
    });
});