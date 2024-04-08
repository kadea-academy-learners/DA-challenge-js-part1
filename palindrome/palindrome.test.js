const isPalindrome = require('./palindrome');

describe('isPalindrome', () => {
    test('Palindrome - cas normal', () => {
        expect(isPalindrome('radar')).toBe(true);
    });

    test('Non palindrome - cas normal', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    test('Chaîne vide', () => {
        expect(isPalindrome('')).toBe(true);
    });

    test('Une lettre', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    test('Avec des espaces', () => {
        expect(isPalindrome('race car')).toBe(true);
    });

    test('Avec majuscules et minuscules', () => {
        expect(isPalindrome('Madam')).toBe(true);
    });

    test('Avec des caractères spéciaux', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    test('Avec des nombres', () => {
        expect(isPalindrome('12321')).toBe(true);
    });

    test('Avec des caractères spéciaux et des espaces', () => {
        expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });

    test('Avec des caractères accentués', () => {
        expect(isPalindrome('été')).toBe(true);
    });
});