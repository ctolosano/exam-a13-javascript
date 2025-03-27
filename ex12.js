function filtrerLongsMots(mots) {
	for (let i = 0; i < mots[i].length; i++) {
        if (mots[i].length > 5) {
            console.log(mots[i]);
        }
    }
}

console.log(filtrerLongsMots(["chat", "éléphant", "chien", "lion"])); // Résultat attendu : ["éléphant"]
console.log(filtrerLongsMots(["counter-strike", "valorant", "overwatch", "diablo"])); // Résultat attendu : ["counter-strike", "valorant", "overwatch", "diablo"]
