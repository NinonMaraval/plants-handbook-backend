const express = require('express');

const router = express.Router();
const pool = require('../config/mysql');

router.get('/', function (request, response) {
  pool.query('SELECT specimen.* FROM specimen', (error, results) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.send(results);
    }
  });
});

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  pool.query('DELETE FROM specimen WHERE id = ?', [id], (error, results) => {
    if (error) {
      response.status(500).send(error);
    } else if (results.affectedRows > 0) {
      response.sendStatus(204);
    } else {
      response.status(404).send({ error: `no plant with id ${id}` });
    }
  });
});

module.exports = router;
