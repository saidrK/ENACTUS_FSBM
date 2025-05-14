-- Créer la base de données si elle n'existe pas
CREATE DATABASE IF NOT EXISTS enactus_club;

-- Utiliser la base de données
USE enactus_club;

-- Créer la table membres si elle n'existe pas
CREATE TABLE IF NOT EXISTS membres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    codeApogee VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT NOT NULL,
    filiere VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vider la table avant d'insérer de nouvelles données
TRUNCATE TABLE membres;

-- Insérer les données
INSERT INTO membres (nom, prenom, codeApogee, email, age, filiere) 
VALUES 
    ('Alami', 'Fatima', '20230001', 'fatima.alami@email.com', 20, 'informatique'),
    ('Haddad', 'Omar', '20230002', 'omar.haddad@email.com', 21, 'gestion'),
    ('Zahran', 'Amina', '20230003', 'amina.zahran@email.com', 19, 'marketing'),
    ('Khalil', 'Youssef', '20230004', 'youssef.khalil@email.com', 22, 'economie'),
    ('Nassar', 'Leila', '20230005', 'leila.nassar@email.com', 20, 'droit'),
    ('Farhat', 'Hassan', '20230006', 'hassan.farhat@email.com', 21, 'economie'),
    ('Saab', 'Nour', '20230007', 'nour.saab@email.com', 19, 'informatique'),
    ('El Hajj', 'Sami', '20230008', 'sami.elhajj@email.com', 22, 'autre'),
    ('Chami', 'Sara', '20230009', 'sara.chami@email.com', 20, 'architecture'),  -- Correction ici
    ('Mouawad', 'Karim', '20230010', 'karim.mouawad@email.com', 21, 'autre'),
    ('Aoun', 'Hala', '20230011', 'hala.aoun@email.com', 19, 'informatique'),
    ('Darwish', 'Ali', '20230012', 'ali.darwish@email.com', 22, 'autre'),
    ('Rahal', 'Zainab', '20230013', 'zainab.rahal@email.com', 20, 'mathematiques'),
    ('Hamdan', 'Bilal', '20230014', 'bilal.hamdan@email.com', 21, 'gestion'),
    ('Jaber', 'Rania', '20230015', 'rania.jaber@email.com', 19, 'marketing'),
    ('Younes', 'Tarek', '20230016', 'tarek.younes@email.com', 22, 'droit'),
    ('Ismail', 'Laila', '20230017', 'laila.ismail@email.com', 20, 'autre'),
    ('Kanaan', 'Khaled', '20230018', 'khaled.kanaan@email.com', 21, 'economie'),
    ('Sari', 'Mona', '20230019', 'mona.sari@email.com', 19, 'marketing'),
    ('Qassem', 'Ibrahim', '20230020', 'ibrahim.qassem@email.com', 22, 'autre');
    

INSERT INTO membres (nom, prenom, codeApogee, email, age, filiere) 
VALUES ('Fakhoury', 'Rima', '20230021', 'rima.fakhoury@email.com', 20, 'informatique'),
('Mansour', 'Ahmad', '20230022', 'ahmad.mansour@email.com', 21, 'gestion'),
('Ghanem', 'Nada', '20230023', 'nada.ghanem@email.com', 19, 'droit'),
('Shami', 'Wael', '20230024', 'wael.shami@email.com', 22, 'economie'),
('Barakat', 'Lina', '20230025', 'lina.barakat@email.com', 20, 'marketing');
