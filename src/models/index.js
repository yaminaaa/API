const Pokemon = require('./Pokemon');

// Si besoin de faire des associations d'une bdd :)

// Si la table pokemon n'existe pas... alors la crée

const init = async () => {
  await Pokemon.sync();
}

init();

module.exports = {
  Pokemon
};