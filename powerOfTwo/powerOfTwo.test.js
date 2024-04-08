const isPowerOfTwo = require('./powerOfTwo');

    test('Puissance de deux - cas normal', () => {
        expect(isPowerOfTwo(4)).toBe(true);
    });

    test('Non puissance de deux - cas normal', () => {
        expect(isPowerOfTwo(6)).toBe(false);
    });

    test('Zéro', () => {
        expect(isPowerOfTwo(0)).toBe(false);
    });

    test('Nombre négatif', () => {
        expect(isPowerOfTwo(-16)).toBe(false);
    });

    test('Nombre décimal', () => {
        expect(isPowerOfTwo(1.5)).toBe(false);
    });

    test('Un', () => {
        expect(isPowerOfTwo(1)).toBe(true);
    });

    test('Grand nombre - puissance de deux', () => {
        expect(isPowerOfTwo(1024)).toBe(true);
    });

    test('Grand nombre - non puissance de deux', () => {
        expect(isPowerOfTwo(12345)).toBe(false);
    });

    test('Nombre très grand', () => {
        expect(isPowerOfTwo(9007199254740992)).toBe(true);
    });

    test('Nombre négatif - puissance de deux', () => {
        expect(isPowerOfTwo(-8)).toBe(false);
    });

