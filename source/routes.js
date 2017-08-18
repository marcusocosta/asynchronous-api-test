const express = require('express');
const validation = require('./validation');
const testControllers = require('./tests/controllers');
const resultControllers = require('./results/controllers');
const executeControllers = require('./executions/controllers');

const router = new express.Router();

router.post('/tests', validation.test, testControllers.post);
router.post('/results', resultControllers.post);
router.post('/executions', executeControllers.post);
router.get('/executions/:executionCode', executeControllers.get);

router.all('*', (req, res) => {
  res.status(404).json({ message: 'Recurso não encontrado!' });
});

module.exports = router;
