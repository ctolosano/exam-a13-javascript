    function genererDescriptions(personnes) {
        let tableau = []
        for ( let i = 0; i < personnes.length; i++) {
            let phrase = personnes[i].nom + " a " + personnes[i].age + " ans."
            tableau.push(phrase)
        }
        return tableau
    }

    console.log(
        genererDescriptions([
            { nom: "Alice", age: 25 },
            { nom: "Bob", age: 30 },
        ])
    );
    // Résultat attendu : ["Alice a 25 ans.", "Bob a 30 ans."]
    console.log(
        genererDescriptions([
            { nom: "", age: 0 },
            { nom: "John", age: 4 },
        ])
    );
    // Résultat attendu : [" a 0 ans.", "John a 4 ans."]