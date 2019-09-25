/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
//

/*
Définition des routes
*/
    // Afficher la liste des posts dans la page INDEX
    router.get( '/', (req, res) => {
        // Collection récupérée : Renvoyer le fichier index dans la réponse avec la collection
        res.render('index');
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//