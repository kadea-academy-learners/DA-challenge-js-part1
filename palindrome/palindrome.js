// Écrire une fonction qui vérifie si une chaîne de caractères est un palindrome.

function removeSpecialCharactersAndSpaces(str) {
  return str.replace(/[\s`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
}

function isPalindrome(str) {}

// 🚫 Ne pas supprimer la ligne suivante
module.exports = isPalindrome;
