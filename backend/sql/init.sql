-- Création de la base de données
CREATE DATABASE IF NOT EXISTS enactus_club;

USE enactus_club;

-- Création de la table membres
CREATE TABLE IF NOT EXISTS membres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    codeApogee VARCHAR(50),
    email VARCHAR(150),
    age INT,
    filiere VARCHAR(100)
);