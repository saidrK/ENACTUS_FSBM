const db = require('../config/db');

exports.ajouterMembre = (req, res) => {
    const { nom, prenom, codeApogee, email, age, filiere } = req.body;
    const sql = `INSERT INTO membres (nom, prenom, codeApogee, email, age, filiere) VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(sql, [nom, prenom, codeApogee, email, age, filiere], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: '✅ Membre ajouté avec succès' });
    });
};

exports.deleteMembre = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM membres WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Erreur serveur' });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Membre non trouvé' });
        res.status(200).json({ message: 'Membre supprimé' });
    });
};


