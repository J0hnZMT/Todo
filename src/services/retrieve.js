const Connection = require('../database/connection')

/* Retrieve function */
module.exports = async (fields) => {
  try {
    const query = `SELECT ` +
                    `${fields} ` +
                  `FROM ` +
                    `tasks`

    const results = await Connection(query)

    return results
  } catch (err) {
    return []
  }
}