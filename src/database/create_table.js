var mysql = require('mysql');

/* Database Connection */
var db_conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "tododb"
});

/* Create the table */
db_conection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE tasks (id INT AUTO_INCREMENT PRIMARY KEY, task VARCHAR(255) NOT NULL, status BOOLEAN DEFAULT 0)";
  db_conection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    process.exit(1);
  });
});
