const fs = require('fs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'passw0rd',
    database: 'test',
    ssl: {
        ca: fs.readFileSync(__dirname + '/certs/ca.pem'),
        key: fs.readFileSync(__dirname + '/certs/client-key.pem'),
        cert: fs.readFileSync(__dirname + '/certs/client-cert.pem')
    }
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
   
  connection.end();