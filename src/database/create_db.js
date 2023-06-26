var mysql = require('mysql');

/* Connection */
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

/* Create the database */
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE tododb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    process.exit(1);
  });
});
