/* Créer une classe Contact avec les ropriétés :
    Nom,
    Prenom,
    Date de naissance,
    Sexe,
    Adresse,
    Code postal
    Ville
    Telephone
    EMail */

/* Méthodes :
    toString    // Affiche les infos du contact
    mail        // Envoie un mail au contact */

class Contact {
    constructor(nom, prenom, dateNaissance, sexe, adresse, codePostal, ville, telephone, email) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.sexe = sexe;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.ville = ville;
        this.telephone = telephone;
        this.email = email;
    }

    toString() {
        console.log("Nom", this.nom);
        console.log("Prénom", this.prenom);
        console.log("Date de naissance", this.dateNaissance);
        console.log("Sexe", this.sexe);
        console.log("Adresse", this.adresse);
        console.log("Code postal", this.codePostal);
        console.log("Ville", this.ville);
        console.log("Téléphone", this.telephone);
        console.log("Email", this.email);
    }

    mail() {
        console.log("Envoi d'un mail à", this.email);
    }
}

let contact = new Contact("Doe", "John", "01/01/1970", "M", "1 rue du test", "75000", "Paris", "0102030405", "doe.john@hotmail.com");
contact.toString();
contact.mail();