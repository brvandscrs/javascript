/*class Animal {

    constructor(nom) {
        this.nom = nom;
    }

    NbPattes(n) {
        this.NbPattes = n;
    }

    parler() {
        console.log(this.nom + ' fait du bruit.');
    }

    afficher() {
        console.log('Nom : ', this.nom);
        console.log('Nombre de pattes : ', this.NbPattes);
    }
}

// Possibilité de créer des classes qui héritent une classe existante tout en redefinissant ses méthodes.

class Chien extends Animal {
    NbPattes = 3;
    parler() {
        console.log(this.nom + ' fait woof woof.');
    }
}

class Chat extends Animal {
    constructor(nom) {
        super(nom);
        this.NbPattes = 4;
    }
    parler() {
        console.log(this.nom + ' fait miaou.');
    }
}

let medor = new Animal('Medor');
medor.NbPattes(4);
medor.afficher();
medor.parler();

let rex = new Chien('Rex');
rex.afficher();
rex.parler();

let felix = new Chat('Felix');
felix.afficher();
felix.parler();*/

class Contact {
    constructor(nom, prenom, dateNaissance) {
        Object.assign(this, { nom, prenom, dateNaissance });
    }
    afficher() {
        console.log(`${this.nom} ${this.prenom}, Né(e) le: ${this.dateNaissance}`);
    }
}

class Employe extends Contact {
    constructor(nom, prenom, dateNaissance, salaire, anciennete) {
        super(nom, prenom, dateNaissance);
        Object.assign(this, { salaire, anciennete });
    }
    augmenterSalaire() {
        this.salaire *= this.anciennete > 10 ? 1.1 : 1.05;
    }
    afficher() {
        super.afficher();
        console.log(`Salaire: ${this.salaire.toFixed(2)}€, Ancienneté: ${this.anciennete} ans`);
    }
}

const employe1 = new Employe("Doe", "John", "1985-06-15", 3000, 12);
employe1.afficher();
employe1.augmenterSalaire();
employe1.afficher();