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
        res.render('index');
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//