// model for db for messages

const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./Users');

const Message = sequelize.define('Messages', {
    content: { type: DataTypes.STRING, allowNull: false },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

// Relationships
Message.belongsTo(User, { as: 'sender', foreignKey: 'senderId' });
Message.belongsTo(User, { as: 'recipient', foreignKey: 'recipientId' });

module.exports = Message;