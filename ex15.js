function filtrerProduitsEnPromo(produits) {
	let tableau = []
    
}

console.log(
	filtrerProduitsEnPromo([
		{ nom: "Télévision", prix: 500, promo: true },
		{ nom: "Casque audio", prix: 100, promo: false },
		{ nom: "Smartphone", prix: 700, promo: true },
	])
);
// Résultat attendu : [{nom: "Télévision", prix: 500, promo: true}, {nom: "Smartphone", prix: 700, promo: true}]

console.log(
	filtrerProduitsEnPromo([
		{ nom: "Télévision", prix: 500, promo: false },
		{ nom: "Casque audio", prix: 100, promo: false },
		{ nom: "Smartphone", prix: 700, promo: false },
	])
);
// Résultat attendu : []