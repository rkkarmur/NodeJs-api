const mysql = require('mysql2');

// create the connection to database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sql_task'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connection created on db name: <....sql_task ....>!!");
});

module.exports.con = con;