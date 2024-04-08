// Écrire une fonction qui vérifie si une chaîne de caractères est un palindrome.


function removeSpecialCharactersAndSpaces(str) {
    return str.replace(/[\s`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
}

function isPalindrome(str) {

}


module.exports = isPalindrome;