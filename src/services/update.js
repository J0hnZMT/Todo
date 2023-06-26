const Connection = require('../database/connection')

/* Update function */
module.exports = async (id, task, status) => {
    try {
      const query = `UPDATE ` +
                      `tasks ` +
                    `SET ` +
                      `task = '${task}', ` +
                      `status = '${status}' ` +
                    `WHERE ` +
                      `id = ${id}`
  
      await Connection(query)
  
      return true
    } catch (err) {
      return false
    }
  }