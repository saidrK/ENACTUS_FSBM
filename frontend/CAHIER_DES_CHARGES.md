# Cahier des Charges - Site Web Enactus FSBM

## 1. Présentation du Projet

### 1.1 Contexte
Enactus FSBM est une équipe étudiante qui développe des projets entrepreneuriaux à impact social. Le site web vise à présenter l'équipe, ses projets et ses réalisations de manière professionnelle et engageante.

### 1.2 Objectifs
- Présenter l'équipe Enactus FSBM et ses valeurs
- Mettre en avant les projets et réalisations
- Faciliter le recrutement de nouveaux membres
- Créer une plateforme d'information pour les partenaires et sponsors
- Améliorer la visibilité de l'équipe

## 2. Spécifications Techniques

### 2.1 Stack Technologique
- **Frontend**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: TailwindCSS 4.1.5
- **Animations**: 
  - ScrollReveal pour les animations au scroll
  - Motion pour les animations d'interface
- **Gestion d'État**: Zustand 5.0.4
- **Icônes**: Lucide React
- **Linting**: ESLint 9.25.0

### 2.2 Architecture du Projet
```
src/
├── assets/          # Ressources statiques
├── components/      # Composants React
│   ├── cards/      # Composants carte
│   ├── elements/   # Éléments UI
│   ├── sections/   # Sections principales
│   ├── shared/     # Composants partagés
│   └── test/       # Tests
├── hooks/          # Custom hooks
├── pages/          # Pages
├── store/          # État global
└── utils/          # Utilitaires
```

## 3. Fonctionnalités

### 3.1 Page d'Accueil
- **Hero Section**
  - Vidéo d'introduction
  - Message d'accueil
  - Call-to-action principal
- **Section À Propos**
  - Présentation de l'équipe
  - Mission et vision
  - Valeurs
- **Section Réussites**
  - Trophées et distinctions
  - Réalisations majeures
  - Statistiques clés
- **Section Projets**
  - Présentation des projets en cours
  - Impact social
  - Galerie d'images
- **Section Événements**
  - Calendrier des événements
  - Photos des événements passés
  - Inscription aux événements
- **Call-to-Action Final**
  - Formulaire de contact
  - Liens vers les réseaux sociaux

### 3.2 Fonctionnalités Générales
- **Design Responsive**
  - Mobile-first
  - Adaptation tablette et desktop
- **Thème Sombre/Clair**
  - Switch automatique selon les préférences système
  - Switch manuel
- **Animations**
  - Animations au scroll
  - Transitions fluides
  - Effets de hover
- **Performance**
  - Chargement optimisé des images
  - Lazy loading des composants
  - Code splitting

## 4. Design et UX

### 4.1 Charte Graphique
- **Couleurs**
  - Primaire: #D97C2B (Orange Enactus)
  - Secondaire: #FEC223 (Jaune Enactus)
  - Accent: #FEB032 (Orange clair)
  - Texte: 
    - Sombre: #1F2937
    - Clair: #F9FAFB
- **Typographie**
  - Police principale: Raleway
  - Taille de base: 16px
  - Échelle typographique: 1.25

### 4.2 Composants UI
- **Navigation**
  - Menu responsive
  - Sous-menus animés
  - Indicateur de page active
- **Boutons**
  - Style primaire et secondaire
  - États hover et active
  - Animations de transition
- **Cards**
  - Design moderne avec ombres
  - Effets de hover
  - Images optimisées

## 5. Contraintes Techniques

### 5.1 Performance
- Score Lighthouse > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Taille totale < 2MB

### 5.2 Compatibilité
- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Versions mobiles récentes
- Support des fonctionnalités modernes

### 5.3 SEO
- Meta tags optimisés
- Structure HTML sémantique
- Images avec alt text
- Sitemap XML

## 6. Livrables

### 6.1 Code Source
- Code commenté et documenté
- Tests unitaires
- Documentation technique
- Guide d'installation

### 6.2 Documentation
- Guide utilisateur
- Documentation technique
- Guide de maintenance

## 7. Planning et Livraison

### 7.1 Phases de Développement
1. **Phase 1: Setup et Structure** (1 semaine)
   - Configuration du projet
   - Mise en place de l'architecture
   - Création des composants de base

2. **Phase 2: Développement Core** (2 semaines)
   - Implémentation des sections principales
   - Intégration des animations
   - Mise en place du responsive

3. **Phase 3: Optimisation** (1 semaine)
   - Tests de performance
   - Optimisation SEO
   - Corrections de bugs

4. **Phase 4: Finalisation** (1 semaine)
   - Tests finaux
   - Documentation
   - Déploiement

### 7.2 Livraison
- Code source versionné
- Documentation complète
- Environnement de production
- Formation à l'utilisation

## 8. Maintenance

### 8.1 Support
- Corrections de bugs
- Mises à jour de sécurité
- Support technique

### 8.2 Évolutions Futures
- Système de blog
- Espace membre
- Intégration réseaux sociaux
- Multilangue 