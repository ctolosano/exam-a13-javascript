function longueursMots(mots) {
    let tableau = []
	for ( let i = 0; i < mots.length; i++) {
        let longueur = mots[i].length;
        tableau.push(longueur);
    }
    return tableau
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]   