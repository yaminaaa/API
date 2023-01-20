const { Pokemon } = require("../models");

const pokeController = {
  async getAll(req, res) {
    const pokemons = await Pokemon.findAll();

    res.json(pokemons);
  },
  async getOne(req, res) { 
    // Récupérer un pokemon à partir du req.params.id
    const pokemon = await Pokemon.findByPk(req.params.id);

    res.json(pokemon);
    
  },
  async create(req, res) { 
    // Créer un nouveau pokemon à partir du req.body puis renvoyer le nouveau élément creer
    console.log(req.body);

    const item = await Pokemon.create(req.body);
    res.json(item);

  },
  async update(req, res) { 
    // Mettre à jour un pokémon à partir de req.params.id ET req.body
    await Pokemon.update(req.body, { 
      where: { id: Number(req.params.id)}
    });

    const item = await Pokemon.findByPk(req.params.id);
    res.json(item);

  },
  async delete(req, res) { 
    // Supprimer un pokémon à partir de req.params.id
    const item = await Pokemon.destroy({
      where: { id: req.params.id }
    });

    res.json(item);
  }

}

module.exports = pokeController;