const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Pokemon extends Model { }

Pokemon.init({
    number: {
        type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
}, {
    sequelize,
    tableName: 'pokemon'
});

module.exports = Pokemon;