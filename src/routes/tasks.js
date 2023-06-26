const express = require('express')
const router = express.Router()

const createService = require('../services/create')
const retrieveService = require('../services/retrieve')
const retrievetaskService = require('../services/task')
const updateService = require('../services/update')
const deleteService = require('../services/delete')

/* Create a task */
router.post(`/create`, async (req, res) => {
  const { task, status } = req.body

  const results = await createService(task, status)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: "Successfully Created!"
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Created!"
      })
  }
})

/* Get all task */
router.get(`/tasks`, async (req, res) => {
  const fields = ['id', 'task', 'status']

  const results = await retrieveService(fields)

  if (results) {
    res
      .status(200)
      .send(results)
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Retrieved!"
      })
  }
})

/* Get a task */
router.get(`/task`, async (req, res) => {
  const { id } = req.query

  const results = await retrievetaskService(id)

  if (results) {
    res
      .status(200)
      .send(results)
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Retrieved!"
      })
  }
})

/* Update a task */
router.post(`/update`, async (req, res) => {
  const { id, task, status } = req.body

  const results = await updateService(id, task, status)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: "Successfully Updated!"
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Updated!"
      })
  }
})

/* Delee a task */
router.get(`/delete`, async (req, res) => {
  const { id } = req.query

  const results = await deleteService(id)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: "Successfully Deleted!"
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Deleted!"
      })
  }
})

module.exports = router