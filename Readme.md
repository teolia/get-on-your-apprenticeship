# Teolia - Get on your Apprenticeship !

Ce projet est conçu comme un tp itératif te permettant de tester tes connaissances et d'apprendre ce qui te manque pour l'instant via des exemples simples.

> :information_source: **INFO**: Tu peux faire ce projet pour le fun si tu le souhaites. Rien ne t'engage si tu te lances dedans, donc sans pression :smile:

> ⚠️  **ATTENTION**: N'aie crainte, tu n'as pas besoin de tout faire avant de revenir vers nous avec tes questions et ou l'envie de présenter ton projet. 
> D'ailleurs, on t'invite à rejoindre notre Discord pour poser tes questions ou montrer où tu en es dans ton projet: https://discord.gg/8KdQZZCFNK

## Table des matières
* [Teolia - Get on your Apprenticeship !](#teolia---get-on-your-apprenticeship-)
* [Table des matières](#table-des-matières)
* [Outils](#outils)
* [Découvre le projet](#découvre-le-projet)
  * [Récupère le projet](#récupère-le-projet)
  * [Démarrer l'API](#démarrer-lapi)
  * [Démarrer le frontend](#démarrer-le-frontend)
  * [What's inside the box ?](#whats-inside-the-box-)
* [Le projet](#le-projet)
  * [But du projet](#but-du-projet)
  * [Choisi ton parcours !](#choisi-ton-parcours-)
    * [[:star:] Affiche la liste des élèves de Poudlard](#star-affiche-la-liste-des-élèves-de-poudlard)
    * [[:star:] Eh mais attends, y a personne à Poudlard ou quoi ?!](#star-eh-mais-attends-y-a-personne-à-poudlard-ou-quoi-)
    * [[:star:] Ils sont quand même un peu trop en fait. Tires en un au sort !](#star-ils-sont-quand-même-un-peu-trop-en-fait-tires-en-un-au-sort-)
    * [[:fire:] [FRONT/API] As you wish :smile:](#fire-frontapi-as-you-wish-smile)
    * [[:fire:] [FRONT] Claque ton plus beau CSS](#fire-front-claque-ton-plus-beau-css)
    * [[:fire:] [API] Implémente un système de filtre par maison](#fire-api-implémente-un-système-de-filtre-par-maison)
    * [[:fire::fire:] [FRONT/API] Dockerise les images front et API](#firefire-frontapi-dockerise-les-images-front-et-api)
    * [[:fire::fire:] [FRONT/CLOUD] Déploie le front sur Github pages](#firefire-frontcloud-déploie-le-front-sur-github-pages)
    * [[:fire:] [API/CLOUD] Déploie l'API sur Heroku](#fire-apicloud-déploie-lapi-sur-heroku)
    * [[:fire::fire:] [FRONT] C'est la crise ! Il nous faut des stats](#firefire-front-cest-la-crise--il-nous-faut-des-stats)
    * [[:fire::fire::fire:] [API/DB/CLOUD] Utilise Google Cloud firebase pour stocker les données json](#firefirefire-apidbcloud-utilise-google-cloud-firebase-pour-stocker-les-données-json)
    * [[:fire::fire:] [FRONT] Rend le site responsive pour pouvoir le visualiser sur un smartphone ](#firefire-front-rend-le-site-responsive-pour-pouvoir-le-visualiser-sur-un-smartphone)
    * [[:fire::fire:] [FRONT] Met en place des tests fonctionnels avec Cypress](#firefire-front-met-en-place-des-tests-fonctionnels-avec-cypress)
    * [[:fire::fire:] [API] Met en place des tests unitaires avec jest sur l'API](#firefire-api-met-en-place-des-tests-unitaires-avec-jest-sur-lapi)

## Outils
* Pour faire le projet, tu peux utiliser les outils que tu souhaites (VSCode, vim, Atom, Sublime, ...).
Si tu ne sais pas quel outil utiliser, je te conseille de prendre [VSCode](https://code.visualstudio.com/)
* Le seul prérequis pour faire le projet est d'avoir [NodeJS installé sur son PC](https://nodejs.org/en/)
* Et [Git](https://git-scm.com/downloads), bien entendu

## Découvre le projet

### Récupère le projet
* Si tu n'en as pas déjà un, créé toi [un compte Github](https://github.com/join)
* En haut de la page de ce projet, clique sur le bouton Fork. Cela te permettra de faire une copie de ce projet dans les repositories de ton compte personnel
* Récupère le projet localement via un `git clone`
```bash
git clone https://github.com/<ton_id_github>/get-on-your-apprenticeship.git
```

### Démarrer l'API
```bash
cd api
npm install
npm start
```

> L'API devrait alors être disponible à l'adresse suivante: http://localhost:3000

Pour vérifier qu'elle fonctionne correctement, tu peux charger l'URL suivante: http://localhost:3000/dummy/student (cela devrait te retourner le nom d'un sorcier célèbre).

---

> :raised_hand::raised_hand: Eh msieur ! Je fais quoi moi si j'aime pas les API en node (express) ?

> :older_man: Mais tu fais comme tu veux. Si tu préfères te faire un back en python (flask par ex), il y a aucun soucis. Essaye juste de reprendre le code de base situé dans le fichier `api/routes/dummy.js`. Contacte moi sur Discord (@Albus Dumbledore sur Discord) si tu as besoin d'aide pour créer l'API python équivalente à celle en node.

### Démarrer le frontend
Dans un autre terminal (on veut que le front et l'API soit démarrés en même temps)
```bash
cd front
npm install
npm start
```

> Le front devrait alors être disponible à l'adresse suivante: http://localhost:8080

### What's inside the box ?
Maintenant que tu as démarré le front et l'API, tu dois pouvoir contempler un manifique site listant les élèves de l'école Poudlard 

> Bon, pour l'instant, c'est pas bien brillant, mais grâce à ton aide, je sens qu'on va faire mieux :smile:

## Le projet
### But du projet
Le but est d'améliorer les fonctionnalités du front et de l'API afin d'obtenir les résultats demandés dans les items suivants.

### Choisi ton parcours !
> :information_source: **INFO**: Seuls les items de la liste marqués par [:star:] sont à faire a minima. Pour le reste, marqués par [:fire:], tu dois choisir deux items au minimum et essayer de les implémenter. Après, si t'es on fire et que tu veux en faire un maximum, c'est pas moi qui vais t'en empêcher :smile:

> J'ai essayé de représenter la difficulté de chaque tâche optionnelle en ajoutant des symbôles :fire:. 
> :fire: = facile et 
> :fire::fire::fire: = dur

#### [:star:] Affiche la liste des élèves de Poudlard
Pour commencer, tu vas devoir améliorer le front afin d'afficher la liste de tous les élèves en préinscription à Poudlard.
Pour cela
* Commence par modifier l'appel API fait depuis le front pour appeler http://localhost:3000/dummy/students
* Puis, modifie le front en fonction pour afficher une belle liste d'étudiants, ainsi que leurs maisons 

> Libre à toi d'implémenter ce que tu veux pour l'affichage. Du temps que ça te plait, c'est le principal

#### [:star:] Eh mais attends, y a personne à Poudlard ou quoi ?!
Tu dois te rendre compte que la liste des élèves est un peu courte quand même. Pour pallier ce problème, on va aller chercher une liste un peu plus à jour disponible sur l'API du ministère de la magie: http://hp-api.herokuapp.com/api/characters

Ici, ton but va être de réaliser une nouvelle route dans l'API qui se chargera de récupérer la liste des élèves pour toi à chaque appel.

Pour cela, dans le dossier api:
* Créer un nouveau fichier appelé `real.js` (parce que c'est la vraie API qu'on est en train de créer) dans le repertoire `routes`. Tu peux t'inspirer du contenu du fichier dummy pour remplir ton nouveau fichier
* Référence ta nouvelle route dans le ficher `app.js` pour qu'elle soit accessible lors d'un appel sur http://localhost:3000/real/students
* Implémente le code qui va bien pour que cette fonction aille chercher la liste des élèves sur http://hp-api.herokuapp.com/api/characters puis la renvoie telle quelle.


Puis améliore ton front pour afficher quelques nouvelles informations que tu ne veux absolument pas manquer. Le `Patronus` des élèves par exemple.

> Tu peux afficher les infos comme tu le souhaites, essaye juste d'avoir une interface lisible (un tableau par exemple)

#### [:star:] Ils sont quand même un peu trop en fait. Tires en un au sort !
Cette année a lieu la coupe de trois sorciers à Poudlard. Afin que les directeurs puissent choisir un champion par école, il te demandent de créer une fonction leur permettant de tirer au sort une personne au hasard dans la base des élèves que tu as mis à disposition dans la question précédente.

Tu vas donc devoir créer une nouvelle route disponible à l'adresse: http://localhost:3000/real/randomstudent

Pour cela, tu peux ajouter une nouvelle route dans le fichier `real.js`.

> A toi de trouver quoi faire pour renvoyer un seul élève à partir de la liste disponible à travers l'API du ministère.

---

> :rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light:

> Je le remet la parce que je sais que personne lis les consignes jusqu'au bout. A partir d'ici, tu n'es pas obligé de tout faire, choisis juste deux options [:fire] et implémente les. Si tu veux en faire plus, go go go ! :rocket::rocket::rocket: (en vrai si tu arrives à faire tous les items, t'es chaud ! :fire:)

> :rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light::rotating_light:

---

#### [:fire:] [FRONT/API] As you wish :smile:
Avant de te donner pleins de trucs dont t'as jamais entendu parler, je t'encourage à implémenter ce qui te fait plaisir. Si le début de projet t'as donné des idées et que tu veux pousser à fond, vas y ! Ça comptera tout aussi bien pour un (ou même tes deux) questions optionnelles

#### [:fire:] [FRONT] Claque ton plus beau CSS
Tu trouves mon front claqué ?! Bon, en vrai, tu as raison (même si j'ai tout donné :disappointed:)

Je pense que ça va être l'occasion de montrer ce que tu es capable de faire en UI. Sort tes skills CSS et fait moi le plus beau front dont tu es capable.

#### [:fire:] [API] Implémente un système de filtre par maison
On a pleins d'élèves, c'est cool, mais quand il faut faire l'appel, c'est un peu compliqué.
Ce qui serait top, c'est de pouvoir les filtrer pour pouvoir avoir uniquement les élèves de gryffondor lorsqu'on appelle l'API.

Pour cela, ajoute la possibilité de soumettre un critère de recherche sur la route `real/student` via les query params. Exemple d'appel http://localhost:3000/real/students?house=Gryffindor

#### [:fire::fire:] [FRONT/API] Dockerise les images front et API
> Celle la, elle compte pour deux 

La on commence à rentrer dans les sujets DevOps !!! Viens te frotter à la containerisation en essayant de containeriser ton front et ton API.

Le gain ? En dockerisant ton application, tu seras capable de la distribuer très facilement à n'importe qui ayant une commande Docker installée sur son ordi

> Si tu veux en savoir plus sur Docker: https://www.docker.com/get-started

#### [:fire::fire:] [FRONT/CLOUD] Déploie le front sur Github pages
Un front dispo pour toi sur ton ordi, c'est bien. Mais le rendre disponible à tous les apprentis sorciers qui voudraient savoir qui sera à Poudlard cette année, c'est mieux !

Pour déployer ton site, tu vas devoir le builder (regarde du coté de `npm run build`)
Tu as maintenant une archive statique de site dans un répertoire build. Il ne te reste plus qu'a le déployer à l'aide de [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) (solution gratuite)

Normalement, si tu as réussi ton coup, tu devrais avoir un site déployé sur les internets avec une URL du style: `https://<ton_id_github>.github.io/get-on-your-apprenticeship`

#### [:fire:] [API/CLOUD] Déploie l'API sur Heroku
Si tu as fait la question précédente, tu te demande surement comment déployer le code de ton API. Et bien, sache que c'est encore plus simple que ton front.

Pour déployer ton API, utilise [la documentation d'Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) pour déployer des projets node (c'est gratuit et assez rapide)

#### [:fire::fire:] [FRONT] C'est la crise ! Il nous faut des stats
Les professeurs se sentent submergés par le nombre d'élèves dans la liste et aimeraient avoir quelques statistiques dessus.

Sors ta plus belle librairie front pour afficher les statistiques de ton choix dans un magnifique dashboard (tu peux trouver [des exemples de dashboard ici](https://madewithreactjs.com/dashboards))

#### [:fire::fire::fire:] [API/DB/CLOUD] Utilise Google Cloud firebase pour stocker les données json
Pour l'instant, tu appelles une API externe qui est rattachée au ministère de la magie. Cependant, Poudlard voudrait être maitre de ses données et entreprend donc de rapatrier les données dans une base de donnée Cloud, à savoir: [Google Cloud firestore](https://cloud.google.com/firestore)

Pour cela, instancie une database Firestore, puis copie les données de l'API dasn la collection que tu auras créée. Enfin, modifie ton API pour qu'elle aille chercher dans ta database fraichement créée.

> Tu peux utiliser la doc quickstart pour t'aider: https://cloud.google.com/firestore/docs/quickstart-servers#node.js

#### [:fire::fire:] [FRONT] Rend le site responsive pour pouvoir le visualiser sur un smartphone 
Les élèves de Poudlard voudraient avoir accès à la liste d'élèves en permanence et donc sur leur smartphone magique (non, non, jte jure, je force pas :smile:)

Tu vas donc devoir faire en sorte de rendre ta/tes pages responsives afin qu'elles s'affichent sans problème sur un smartphone.

> Tu peux utiliser les ressources suivantes pour t'aider:
> * [How to build fully responsive React apps with nothing but inline styles and js](https://codeburst.io/how-to-build-fully-responsive-react-apps-with-nothing-but-inline-styles-and-javascript-242c091b6ba1)
> * [Simulate mobile devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)

#### [:fire::fire:] [FRONT] Met en place des tests fonctionnels avec Cypress
Ton appli a pris beaucoup plus d'ampleur que ce que tu avais imaginé à ses débuts ! Maintenant, tous les élèves de l'école l'utilise sans exception et tu galère donc à sortir de nouvelles fonctionnalités de peur d'introduire des bugs dans les fonctionnalités déjà présentes.

Eh mais attends, y a une solution pour ça non ? Je dis oui, oui, oUI, OUI, OUIIIIIIII ! Les tests automatisés bien sûr !

Ici, tu dois implémenter des tests fonctionnels (des tests qui simulent des cliques ou des chargements de page graphiquement) à l'aide de [Cypress](https://www.cypress.io/). Tu peux implémenter le ou les tests fonctionnels de ton choix (ex: vérifier qu'un composant soit la lors du chargement de la page)

> Tu peux t'aider de [ce genre d'article](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/)

#### [:fire::fire:] [API] Met en place des tests unitaires avec jest sur l'API
Maintenant que tu as implémenté des tests automatisés dans ton front, il va falloir se pencher sur les tests automatisés de l'API.

Cette fois ci, les tests automatisés vont vérifier si les données attendues sont bien renvoyées, si le format de renvoi est bien respecté (tableau json par exemple), ou tout autre type de tests qui te donnent envie.

> Encore un dernier petit tip. Tu peux t'aider [avec cet article](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/) :smile:
