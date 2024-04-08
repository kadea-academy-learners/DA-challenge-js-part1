// Écrire un programme pour trouver la racine carrée d'un nombre donné.


function squareRoot(number) {
    if (number === 0) return 0;
    if (number < 0) return NaN;

    let x = number;
    let y = (x + number / x) / 2; // Première estimation

    // Répéter jusqu'à la convergence
    while (Math.abs(y - x) >= 1e-10) {
        x = y;
        y = (x + number / x) / 2;
    }

    return y;
}

module.exports = squareRoot;