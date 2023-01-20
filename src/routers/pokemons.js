const express = require('express');
const pokeController = require('../controllers/pokeController');
const router = express.Router();

router.get('/', pokeController.getAll);
router.get('/:id', pokeController.getOne);
router.post('/', pokeController.create);
router.put('/:id', pokeController.update);
router.delete('/:id', pokeController.delete);

module.exports = router;