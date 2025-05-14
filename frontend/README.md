# Enactus FSBM Landing Page

## Description
Site web vitrine pour Enactus FSBM, présentant les projets, événements et réalisations de l'équipe. Le site est construit avec React et utilise des technologies modernes pour offrir une expérience utilisateur fluide et interactive.

## Technologies & Bibliothèques

### Core
- React 19.1.0
- Vite 6.3.5
- TailwindCSS 4.1.5

### UI/UX
- Lucide React (Icônes)
- ScrollReveal (Animations au scroll)
- Motion (Animations)

### State Management
- Zustand 5.0.4

### Development Tools
- ESLint 9.25.0
- TypeScript Support (@types/react, @types/react-dom)

## Structure du Projet

```
src/
├── assets/          # Images, logos et autres ressources statiques
├── components/      # Composants React réutilisables
│   ├── cards/      # Composants de type carte
│   ├── elements/   # Éléments UI de base
│   ├── sections/   # Sections principales de la page
│   ├── shared/     # Composants partagés
│   └── test/       # Composants de test
├── hooks/          # Custom React hooks
├── pages/          # Pages de l'application
├── store/          # État global (Zustand)
└── utils/          # Fonctions utilitaires
```

## Composants Principaux

### Sections
- `Reussites.jsx` - Présentation des réalisations
- `Events.jsx` - Calendrier des événements
- `OurProjects.jsx` - Présentation des projets
- `IntroVideoSection.jsx` - Section vidéo d'introduction
- `AboutUs.jsx` - À propos de l'équipe
- `CallToAction.jsx` - Section d'appel à l'action

### Composants Partagés
- `NavItem.jsx` - Élément de navigation
- `Button.jsx` - Bouton personnalisé
- `Container.jsx` - Conteneur de mise en page
- `Paragraph.jsx` - Composant de paragraphe stylisé

## Fonctionnalités

- Design responsive
- Animations au scroll
- Thème sombre/clair
- Navigation fluide
- Composants modulaires et réutilisables

## Installation

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
```

2. Installer les dépendances
```bash
npm install
# ou
yarn install
```

3. Lancer le serveur de développement
```bash
npm run dev
# ou
yarn dev
```

## Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

[À DÉFINIR]
