// backend/routes/newsletter.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
    // Ici tu peux enregistrer l'email en base ou envoyer un mail avec nodemailer/sendgrid/etc.
    // Exemple simple :
    if (!email) return res.status(400).json({ message: "Email requis" });
    // await saveEmailToDB(email) ou await sendMail(email)
    res.status(200).json({ message: "Inscription réussie" });
});

module.exports = router;