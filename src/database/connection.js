const mysql = require('mysql')

/* Database Configuration */
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "tododb"
}

const db = mysql.createPool(dbConfig)

/* Database Connection */
module.exports = (query) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, sql) => {
      if (err) {
        console.log("Database error: ", err)
        reject(err)
      } else {
        sql.query(query, (err, results) => {
          if (err) {
            console.log("Query error: ", err)
            reject(err)
          } else {
            resolve(results)
          }

          sql.release()
        })
      }
    })
  })
}