# Flappy Bird with Arduino

## Schéma du projet
![](https://i.imgur.com/wa1owVX.png)


## Configuration Arduino Uno

1. Télécharger Arduino : https://www.arduino.cc/en/Main/Software

2. Brancher la carte Arduino en USB

3. Sur le logiciel Arduino, se rendre sur :
    **Outils** > **Type de carte**, puis **sélectionner votre carte** (Arduino Uno pour nous)

4. Sur le logiciel Arduino, se rendre sur :
     **Outils** > **Port**, puis **sélectionner le port** correspondant à votre carte (exemple : /dev/ttyACM0 *(Arduino Genuino UNO)*)

5. Toujours sur le logiciel Arduino, se rendre sur :
     **Fichier** > **Exemples** > **Firmata** > **StandardFirmataPlus**
 
6. Et enfin, cliquer sur **Téléverser**

## Liste des dépendances 
* **EJS** :
    * C'est un langage de template simple qui vous permet de générer des balises HTML avec JavaScript simple.
* **Express** :
    * C'est un cadre d'application web minimal et flexible de Node.js qui fournit un ensemble robuste de fonctionnalités pour les applications web et mobiles.
* **Johnny Five** :
    * C'est une librairie qui permet de manipuler des cartes électroniques très facilement en JavaScript.
* **Nodemon** :
    * Surveille tout changement dans votre application node.js et redémarrez automatiquement le serveur.
* **Path** : 
    * Le module Path fournit des utilitaires pour travailler avec les chemins d'accès aux fichiers et aux répertoires
* **Socket.io** :
    * C'est une bibliothèque JavaScript pour les applications Web en temps réel. Il permet une communication bidirectionnelle en temps réel entre les clients Web et les serveurs.

## Installer les dépendances

Sur le terminal : 
```
$ npm install
```

## Lancer le serveur

Sur le terminal : 
```
$ npm start
```


## Déroulement du projet

### Première tentative

Nous avons essayé de connecter une carte Arduino à un ordinateur et de simuler la touche espace pour déclencher une réaction sur le jeu floppy bird : *https://github.com/nebez/floppybird*

**Problème**

Cette démarche ne permettait pas de prévoir la compatibilité du projet sur différents ordinateurs, selon l'OS la touche "espace" ne s'appelle pas de la même manière.

### Deuxième tentative

Pour palier aux problèmes, notre interlocuteur nous a conseillé d'utiliser la librairie [Johnny Five](http://johnny-five.io/). Elle permet de manipuler des cartes électroniques très facilement avec un serveur Nodejs. Après avoir trouver comment connecter la carte Arduino avec l'ordinateur et faire fonctionner le bouton, il a fallu assembler le code du jeu avec celui du serveur Nodejs. 

**Problème**

Impossible de réaliser la connexion entre le serveur et le client.

**Solutions**

Nous avons utilisé les modules socket.io et expressJS. socket.io nous a permis d'envoyer des données du serveur au client sans que le client refresh sa page. ExpressJS nous a permis de créer le serveur JS plus facilement.

# FIN 
