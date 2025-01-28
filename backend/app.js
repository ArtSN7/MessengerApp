// imports
const express = require('express');
const cors = require('cors');
const sequelize = require('./models/index');
const authRoutes = require('./routes/authRoutes');

// app setup
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use(express.urlencoded({ extended: true })); // This should be before your routes
app.use('/', authRoutes); // root for login and signup


// Sync database and start server
sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
    const PORT = 5001;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});


