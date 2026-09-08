## Craft Game (Infinite Craft Physique Quantique & Cosmologie)

Une application web interactive d'association d'éléments guidée par la physique des particules, la chimie et l'astrophysique. Combine des composants fondamentaux (quarks, leptons, bosons) pour découvrir la matière, former des éléments chimiques et bâtir des structures cosmiques.

---

### Fonctionnalités Principales

* **Système de Fusion Réactif** : Glisse et dépose des cartes sur la zone de travail (*canvas*) pour déclencher des réactions à 2 ou 3 éléments.
* **Système d'Annihilation** : Associe de la matière et de l'antimatière pour provoquer une réaction d'annihilation et nettoyer la zone.
* **Progression Scientifique** : Arbre d'évolution complet structuré en 10 catégories (Quarks, Leptons, Bosons, Hadrons, Noyaux, Atomes, Molécules, Phases, Stellaire, Cosmique).
* **Interface Adaptative (Responsive)** :
* **Desktop** : Panneau latéral réorganisable et redimensionnable, filtres de recherche et suivi d'apprentissage.
* **Mobile** : Barre d'outils tactile optimisée avec support du *drag-and-drop* contextuel.


* **Encyclopédie & Suivi** : Modal de découverte détaillé pour chaque élément et livre de recettes débloquées au fil de la progression.
* **Personnalisation** : Thème clair / sombre et possibilité d'inverser le panneau latéral.

---

### Structure du Projet

* `index.html` : Structure HTML5 du jeu, modales de découverte/recettes et conteneurs d'interface.
* `style.css` : Styles CSS3, gestion du mode sombre, variables de thèmes et animations d'annihilation.
* `craftgame.js` : Moteur de jeu en JavaScript (gestion du canvas, draggables, détection de collisions, sauvegardes local storage).
* `data.js` : Base de données des éléments, catégories et définitions des réactions.

---

### Installation et Utilisation

1. Télécharge ou clone l'ensemble des fichiers dans un même répertoire.
2. Ouvre le fichier `index.html` dans un navigateur web moderne.
3. **Jouer en ligne** : [kevinraphael95.github.io/craftgame/index.html](https://www.google.com/search?q=https://kevinraphael95.github.io/craftgame/index.html)

---

### Raccourcis & Gestes

* **Clic simple** : Ajoute un élément depuis le panneau vers la zone de jeu.
* **Double-clic** : Duplique une carte présente sur le canvas.
* **Glisser vers le panneau / Clic droit** : Supprime une carte de la zone de jeu.
