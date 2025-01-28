const { Sequelize } = require('sequelize');

// Initialize SQLite database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/messenger_app.db', // Database file
});

module.exports = sequelize;