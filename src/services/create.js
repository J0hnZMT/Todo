const Connection = require('../database/connection')

/* Create function */
module.exports = async (task, status) => {
  try {
    const query = `INSERT INTO ` +
                    `tasks ` +
                  `VALUES ` +
                    `(null, '${task}', '${status}')`

    await Connection(query)

    return true
  } catch (err) {
    return false
  }
}