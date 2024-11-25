const express = require('express');
const cors = require('cors'); // Middleware CORS
const app = express();

const appareils = [
  { name: "Refrigerateur", status: "Allumé" },
  { name: "Tv", status: "Eteint" },
  { name: "Micro Onde", status: "Allumé" },
  { name: "Climatiseur", status: "Eteint" },
];

// Middleware
app.use(cors());
app.use(express.json()); // Pour traiter les requêtes JSON si besoin

const PORT = process.env.PORT || 3001;

// Routes
app.get("/api/appareils", (req, res) => {
  res.json(appareils);
});

app.get("/students", (req, res) => {
  res.json({ name: "achref", age: "23" });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
