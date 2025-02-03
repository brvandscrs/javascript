// Objet littéral
let eleve = {

    // Propriétés (attributs)
    nom: "Dupont",
    prenom: "Jean",
    age: 20,
    moyenne: 15,
    // Méthode
    
    affiche: function() {
        console.log(this.nom + this.prenom + this.age + this.moyenne);
    }
};

console.log(eleve.prenom);
console.log(eleve.nom);
console.log(eleve.age);

eleve.affiche();