// model for db for users
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('Users', {
    id : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING, defaultValue: 'New User' },
    last_name: { type: DataTypes.STRING, defaultValue: 'New User' },
    profile_picture: { type: DataTypes.STRING, defaultValue: '' },
});

module.exports = User;