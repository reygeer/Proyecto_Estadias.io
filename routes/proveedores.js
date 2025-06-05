const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los proveedores
router.get('/', (req, res) => {
  db.query('SELECT * FROM proveedores', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Crear un nuevo registro
router.post('/', (req, res) => {
  db.query('INSERT INTO proveedores SET ?', req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

// Actualizar un registro
router.put('/:id', (req, res) => {
  db.query('UPDATE proveedores SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
});

// Eliminar un registro
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM proveedores WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
});

module.exports = router;
