const express = require('express');
const validation = require('./validation');

const router = new express.Router();

router.post('/tests', validation.test);

router.all('*', (req, res) => {
  res.status(404).json({ message: 'Recurso não encontrado!' });
});

module.exports = router;
