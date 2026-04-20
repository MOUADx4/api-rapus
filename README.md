# 🎵 RapUS API --- API REST MongoDB (Rap Américain)

<div align="center">

<img src="https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/CORS-enabled-blue" />
<img src="https://img.shields.io/badge/Dotenv-secure-yellow" />

<br/>

Mini projet réalisé dans le cadre d'un TP MongoDB.  
Objectif : concevoir une API REST permettant de gérer et rechercher des artistes de rap américain.

</div>

------------------------------------------------------------------------

## 📌 Présentation

RapUS API est une API REST permettant de :

-   gérer une collection d'artistes de rap US
-   effectuer des recherches avancées via MongoDB
-   filtrer les résultats selon des critères

------------------------------------------------------------------------

## 🎯 Thème

-   Rap américain\
-   Entité principale : Artist

------------------------------------------------------------------------

## ✨ Fonctionnalités

-   Création d'artistes\
-   Liste des artistes\
-   Détail par ID\
-   Recherche avancée (keyword + filtre)\
-   Recherche insensible à la casse

------------------------------------------------------------------------

## 🧱 Stack technique

-   Node.js\
-   Express\
-   MongoDB Atlas\
-   MongoDB Driver\
-   CORS\
-   Dotenv

------------------------------------------------------------------------

## ⚙️ Installation

``` bash
git clone <repo-url>
cd rapus-api
npm install
```

Créer un fichier `.env` :

``` env
MONGO_URI="votre_uri_mongodb"
```

------------------------------------------------------------------------

## 🚀 Lancement

``` bash
node server.js
```

API disponible sur : http://localhost:3000

------------------------------------------------------------------------

## 🗄️ Base de données

-   Base : rapus\
-   Collection : artists

------------------------------------------------------------------------

## 🧩 Endpoints

### POST /items

Créer un artiste

### GET /items

Lister les artistes

### GET /items/:id

Récupérer un artiste

### GET /search

Recherche avancée

Exemples :

/search?keyword=trap\
/search?keyword=Future&style=Trap

------------------------------------------------------------------------

## 🧪 Tests cURL

``` bash
curl http://localhost:3000/items
```

------------------------------------------------------------------------

## ✔ Objectifs

-   CRUD partiel\
-   Recherche MongoDB avec \$regex\
-   Filtre dynamique\
-   API fonctionnelle

------------------------------------------------------------------------

## 👤 Auteur

Projet MongoDB --- 2026
