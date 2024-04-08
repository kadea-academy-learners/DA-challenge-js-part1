const power = require('./power');

describe('Puissance d\'un nombre', () => {
test('Type de retour', () => {
    expect(typeof power(2, 3)).toBe('number');
});

test('Puissance positive', () => {
    expect(power(2, 3)).toBe(8);
});

test('Puissance nulle', () => {
    expect(power(5, 0)).toBe(1);
});

test('Base nulle, Puissance non nulle', () => {
    expect(power(0, 3)).toBe(0);
});

test('Base nulle, Puissance nulle', () => {
    expect(power(0, 0)).toBe(1);
});

test('Puissance négative', () => {
    expect(power(3, -2)).toBeCloseTo(0.1111111111);
});

test('Base négative, Puissance paire', () => {
    expect(power(-2, 4)).toBe(16);
});

test('Base négative, Puissance impaire', () => {
    expect(power(-3, 3)).toBe(-27);
});

test('Puissance décimale', () => {
    expect(power(2, 0.5)).toBeCloseTo(1.41421356237);
});

test('Base décimale, Puissance entière', () => {
    expect(power(1.5, 2)).toBe(2.25);
});


});