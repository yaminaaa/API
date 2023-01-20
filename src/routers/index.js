const express = require('express');
const router = express.Router();

const pokemonRouter = require('./pokemons');

router.use('/pokemons', pokemonRouter);

module.exports = router;