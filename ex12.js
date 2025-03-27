function filtrerLongsMots(mots) {
    let tableau = []
	for (let i = 0; i < mots.length; i++) {
        const longueur = mots[i].length;
        if (longueur > 5) {
            tableau.push(mots[i]);
        }
    }
    return tableau
}

console.log(filtrerLongsMots(["chat", "éléphant", "chien", "lion"])); // Résultat attendu : ["éléphant"]
console.log(filtrerLongsMots(["counter-strike", "valorant", "overwatch", "diablo"])); // Résultat attendu : ["counter-strike", "valorant", "overwatch", "diablo"]
