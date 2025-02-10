const mysql = require('mysql');

const connexion = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dbtest'
    }
);

connexion.connect(
    (err) => {
        if (err) throw err;
            console.log('Connecté à la base de données MySQL');
    }
);

connexion.query('SELECT * FROM users',
    function(err, rows) {
        if (err) throw err;
        console.log('Données reçues de dbtest:');
        console.log(rows);
    }
);