const express = require('express');

const router = new express.Router();

router.post('/signin');

router.all('*', (req, res) => {
  res.status(404).json({ message: 'Recurso não encontrado!' });
});

module.exports = router;
