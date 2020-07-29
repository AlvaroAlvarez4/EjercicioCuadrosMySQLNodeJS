const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cuadros'
});

connection.connect(
    function(error) {
        if (error) {
            throw error;
        } else {
            console.log('Conexión correcta')
        }
    }
);

module.exports = connection;