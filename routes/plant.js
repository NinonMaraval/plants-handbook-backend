const express = require('express');

const router = express.Router();
const pool = require('../config/mysql');

router.get('/', (request, response) => {
  pool.query(
    'SELECT specimen.*, category.name FROM specimen JOIN category ON specimen.category_id WHERE specimen.category_id=category.id;',
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    }
  );
});

router.post('/', (request, response) => {
  const plant = request.body;
  pool.query(
    'INSERT INTO specimen (title, description, care, category_id) VALUES (?, ?, ?, ?)',
    [plant.title, plant.description, plant.care, plant.category_id],
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send({
          id: results.insertId,
          ...plant,
        });
      }
    }
  );
});

router.put('/:id', (request, response) => {
  const result = request.body;
  const { id } = request.params;
  pool.query(
    'UPDATE specimen SET ? WHERE id = ?',
    [result, id],
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      } else if (results.affectedRows > 0) {
        response.status(200).send(result);
      } else {
        response.sendStatus(404);
      }
    }
  );
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
