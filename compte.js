// Créer un objet compte (compte bancaire) avec 

// les propriétés:
// Client
// Numero
// Solde

// et les méthodes
// afficher : affiche toutes les propriétés du compte
// crediter : ajoute un montant au solde
// debiter  : enlève un montant au solde

// Créer un compte avec les valeurs suivantes:
// Client: Bryan
// Numero: 123456
// Solde: 1000

// Afficher le compte
// Créditer le compte de 500
// Afficher le compte
// Débiter le compte de 200
// Afficher le compte
// Débiter le compte de 2000
// Afficher le compte

let compte = {
    client: "Bryan",
    numero: 123456,
    solde: 1000,
    afficher: function() {
        console.log("Client", this.client);
        console.log("Numero", this.numero);
        console.log("Solde", this.solde);
    },
    crediter: function(montant) {
        this.solde += montant;
    },
    debiter: function(montant) {
        if (this.solde >= montant) {
            this.solde -= montant;
        } else {
            console.log("Solde insuffisant");
        }
    }
};

compte.afficher();
compte.crediter(500);
compte.afficher();
compte.debiter(200);
compte.afficher();
compte.debiter(2000);
compte.afficher();