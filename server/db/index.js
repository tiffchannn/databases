
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const mysql = require('mysql');
// https://www.npmjs.com/package/mysql

// TODO: establish connection
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

db.connect();

// checking if there's an error with db connection
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) {
    throw error;
  }
  console.log('The solution is: ', results[0].solution);
});

module.exports = db;

