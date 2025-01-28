// imports
const express = require('express');
const cors = require('cors');
const sequelize = require('./models/index');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');

// app setup
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/messages', messageRoutes);

// Sync database and start server
sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
    const PORT = 5000;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});


