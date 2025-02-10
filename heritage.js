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

/*  Créer une classe Contact :
    Propriétés :
        Nom,
        Prenom,
        Date de naissance,

    Méthodes :
        afficher    // Affiche les infos du contact


    Hériter une classe Employe:
    Propriété :
        Salaire
        Anciennete (année)
    Méthode :
        augmenterSalaire
            Ajoute 10% si anciennete >10
            Sinon ajoute 5%
        afficher (avec le salaire et l'ancienneté)
*/

class Contact {
    constructor(nom, prenom, dateNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }

    afficher() {
        console.log("Nom", this.nom);
        console.log("Prénom", this.prenom);
        console.log("Date de naissance", this.dateNaissance);
    }
}

class Employe extends Contact {
    constructor(nom, prenom, dateNaissance, salaire, anciennete) {
        super(nom, prenom, dateNaissance);
        this.salaire = salaire;
        this.anciennete = anciennete;
    }

    augmenterSalaire() {
        if (this.anciennete > 10) {
            this.salaire *= 1.1;
        } else {
            this.salaire *= 1.05;
        }
    }

    afficher() {
        super.afficher();
        console.log("Salaire", this.salaire);
        console.log("Ancienneté", this.anciennete);
    }
}

let employe1 = new Employe("Bryan", "Descours", "06/01/2005", 883, 1);

employe1.afficher();
employe1.augmenterSalaire();
employe1.afficher();