const express = require('express');
const router = express.Router();
// const { ajouterMembre } = require('../controllers/membresController');
const db = require("../config/db");

// router.post('/', ajouterMembre);


// ✅ Route : Ajouter un membre (POST /api/membres)
router.post("/", (req, res) => {
    const { nom, prenom, codeApogee, email, age, filiere } = req.body;

    const query = "INSERT INTO membres (nom, prenom, codeApogee, email, age, filiere) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(query, [nom, prenom, codeApogee, email, age, filiere], (err, result) => {
        if (err) {
            console.error("❌ Erreur lors de l'ajout du membre :", err);
            return res.status(500).json({ error: "Erreur lors de l’ajout du membre." });
        }
        res.status(201).json({ message: "Membre ajouté avec succès", id: result.insertId });
    });
});

// ✅ Route : Récupérer tous les membres (GET /api/membres)
router.get("/", (req, res) => {
    const sql = "SELECT * FROM membres ORDER BY id DESC";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de la récupération des membres." });
        }
        res.json(results);
    });
});

// ❌ Route : Supprimer un membre (optionnelle)
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM membres WHERE id = ?";
    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de la suppression." });
        }
        res.json({ message: "Membre supprimé avec succès." });
    });
});

// Route : Supprimer tous les membre
router.delete("/all", (req, res) => {
    console.log("✅ Route DELETE /api/membres/all atteinte");
    const sql = "TRUNCATE TABLE membres";
    db.query(sql, (err) => {
        if (err) {
            console.log("❌ Erreur lors de la suppression de tous les membres:", err);
            return res.status(500).json({
                error: "Erreur lors de la suppression de tous les membres."
            });
        }
        res.json({
            message: "Tous les membres ont été supprimés avec succès."
        });
    });
});

module.exports = router;
