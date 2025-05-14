const express = require('express');
const cors = require('cors');
const membresRoutes = require("./routes/membres");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // Pour parser JSON

// Routes
app.use('/api/membres', membresRoutes); // Toutes les routes membres commencent par /api/membres

// Lancement serveur
app.listen(PORT, () => {
    console.log(`✅ Backend démarré sur http://localhost:${PORT}`)
});


