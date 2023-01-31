const {Sequelize, Model, DataTypes } = require('sequelize');
// grab index.js from config folder
const sequelize = require('../config');

class Post extends Model {}

Post.init(
    {
        title: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize
    }
);

module.exports = Post;