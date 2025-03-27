function multiplierParDeux(tab) {
    let tableau = []
	for (let i = 0; i < tab.length; i++) {
		tableau.push(tab[i]*2)
	}
    return tableau
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]
