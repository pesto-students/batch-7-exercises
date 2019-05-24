const express = require('express');
const { getProjectById, getAllProjects, addProjects } = require('../database');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await getAllProjects();
  res.send(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getProjectById(id);
  res.send(data);
});

router.post('/', async (req, res) => {
  const { body: data } = req;
  const insertedCount = await addProjects(data);
  res.send(insertedCount);
});
module.exports = router;
