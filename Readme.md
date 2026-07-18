# Patrice Lauret

**Consultant en informatique · Formateur IA · Concepteur de systèmes de connaissance · Passionné par Notion, le prompting et la transformation numérique utile**

Je conçois des dispositifs numériques clairs, robustes et utiles.  
Mon travail se situe à l’intersection de **l’intelligence artificielle, Notion, la structuration de l’information, la pédagogie et les interfaces simples**.  
J’aide les organisations, associations et équipes à transformer des idées dispersées en systèmes compréhensibles, documentés et réellement utilisables.

---

## À propos

Je travaille à l’intersection de **la technique, de la pédagogie et de la stratégie**.

Mon objectif est simple : **transformer des sujets complexes en outils, systèmes et contenus compréhensibles, utilisables et durables**.

J’interviens notamment sur :

- la **formation à l’IA** et à l’ingénierie de prompt
- la **structuration de connaissances** et des workflows
- la **conception de systèmes Notion**
- la **vulgarisation technique**
- la **création de supports pédagogiques et de démonstrateurs**
- la **mise en valeur de contenus** via des landing pages, interfaces et présentations

J’ai une appétence forte pour les environnements où il faut concilier :

- **clarté**
- **rigueur**
- **souveraineté numérique**
- **sécurité**
- **adoption par des publics non techniques**

---

## Mon approche technique

Pour la partie code, je m’appuie sur l’IA comme assistant de développement.  
Je l’utilise pour accélérer le prototypage, générer des bases techniques, explorer plusieurs pistes, corriger des erreurs et améliorer des interfaces.

Ma valeur se situe dans le cadrage, la structuration, la relecture critique, la vérification de la cohérence, la qualité du rendu final et l’alignement avec le besoin utilisateur.

---

## Ce que je fais

### Intelligence artificielle
- formation et sensibilisation à l’IA
- ingénierie de prompt
- cadrage des usages
- structuration de workflows assistés par IA
- analyse des limites, risques et garde-fous

### Notion et systèmes d’organisation
- conception d’espaces de travail structurés
- architecture de bases de données
- systèmes de capture, pilotage et référence
- documentation et pédagogie autour des usages avancés

### Contenus et interfaces
- landing pages éditoriales
- supports pédagogiques
- pages HTML/CSS/Tailwind
- documents structurés pour la décision, la formation ou la communication

### Conseil et facilitation
- aide à la clarification des besoins
- mise en ordre d’idées complexes
- conception de méthodes et cadres d’analyse
- accompagnement à la montée en compétence

---

## Domaines d’intérêt

- IA générative
- prompt engineering
- Notion
- knowledge management
- RAG et structuration documentaire
- UX pédagogique
- souveraineté numérique
- sécurité des usages
- transformation numérique dans le secteur public
- méthodes de réflexion et d’analyse

---

## Ma manière de travailler

Je privilégie :

- les **structures simples**
- les **systèmes réutilisables**
- les **sorties concrètes**
- les **méthodes explicites**
- la **pédagogie**
- la **qualité rédactionnelle**
- une approche où la technologie sert un usage réel

Sur la partie code, j’adopte une approche pragmatique : **je pilote, l’IA assiste**.

Je m’en sers pour :
- générer des bases de code
- accélérer les itérations
- corriger ou refactorer
- produire des prototypes rapides
- comparer plusieurs approches techniques

Je conserve une vigilance forte sur :
- la lisibilité
- la cohérence fonctionnelle
- la sécurité
- l’UX
- l’adaptation au besoin réel

---

## Stack et outils

### Organisation / knowledge management
- Notion
- Markdown
- bases de données documentaires
- méthodes de structuration de l’information

### IA / automatisation
- ChatGPT
- modèles LLM
- prompting avancé
- workflows d’assistance rédactionnelle, analytique et technique
- exploration de RAG, API et connecteurs

### Front / prototypage
- HTML
- CSS
- Tailwind CSS
- JavaScript
- React
- GitHub Pages
- Vercel

### Écosystème et outillage
- Git / GitHub
- VS Code
- outils no-code et low-code
- expérimentation autour de systèmes documentaires et collaboratifs

---

## Ce que l’on trouvera ici

Ce dépôt GitHub me sert de **portfolio évolutif**.  
J’y regroupe progressivement :

- des **prototypes**
- des **pages de démonstration**
- des **supports pédagogiques**
- des **expérimentations IA**
- des **structures de contenu**
- des **modèles réutilisables**
- des **ressources autour de Notion, du prompting et de la clarté rédactionnelle**

Certains travaux publics sont volontairement simplifiés ou anonymisés lorsque les contextes d’origine sont sensibles, institutionnels ou internes.

---

## Structure technique du portfolio

Le site fonctionne en statique (GitHub Pages) avec une séparation claire :

- `index.html` : structure et contenu
- `assets/css/style.css` : styles de base, composants, animations et responsive
- `assets/js/main.js` : interactions globales (navigation, curseur lumineux)
- `assets/js/animations.js` : apparition progressive des blocs (`reveal`)
- `assets/js/reflections.js` : effet d’inclinaison (`tilt`)

### Protection antispam des coordonnées

L’adresse e-mail et le numéro de téléphone ne doivent jamais être écrits en clair dans `index.html`, le README, une issue ou une autre page publique du dépôt.

Le portfolio limite la collecte automatisée de ces informations de la manière suivante :

- `index.html` affiche uniquement les boutons « Afficher l’e-mail » et « Afficher le téléphone » ;
- les coordonnées sont stockées sous forme de codes de caractères dans `assets/js/main.js` ;
- après un clic, JavaScript reconstitue la valeur et remplace le bouton par un lien `mailto:` ou `tel:` utilisable ;
- aucun service externe, cookie ou formulaire de collecte n’est nécessaire.

Pour modifier une coordonnée, convertir la nouvelle valeur en codes de caractères dans la console du navigateur ou avec Node.js :

```js
Array.from("adresse-ou-numero", (character) => character.charCodeAt(0));
```

Reporter ensuite le tableau obtenu dans la propriété `characterCodes` correspondante de `assets/js/main.js`, puis vérifier que l’adresse ou le numéro n’apparaît pas en clair dans les fichiers publics :

```bash
rg -n "fragment-de-la-coordonnee" index.html assets Readme.md
```

Cette technique bloque surtout les robots qui analysent directement le HTML. Elle ne constitue pas un chiffrement : un robot capable d’exécuter JavaScript peut toujours reconstituer les coordonnées. En cas de spam important, utiliser une adresse alias dédiée ou un formulaire côté serveur protégé par un honeypot, une limitation de débit et un CAPTCHA.

Remplacer `@` par `[at]`, utiliser des entités HTML ou ajouter les coordonnées dans `robots.txt` ne fournit pas une protection suffisante.

### Responsive CSS

Le responsive est volontairement conservé dans **un seul fichier** CSS (`style.css`), avec les media queries en fin de fichier :

- `@media (max-width: 1024px)` : tablette
- `@media (max-width: 768px)` : mobile
- `@media (max-width: 420px)` : petits écrans

Cela évite la duplication, les chargements CSS conditionnels inutiles et toute détection appareil en JavaScript.

---

## Philosophie

Je crois aux outils qui rendent les idées plus nettes, les décisions plus solides et les usages plus sereins.

La technologie n’a d’intérêt que lorsqu’elle aide à mieux comprendre, mieux transmettre et mieux agir.
