/*
Importer les dépendances
*/
    // Composants
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');

    // Modules
    const frontRoute = require('./routes/front');
//

/*
Initialiser le serveur
*/
    // Configurer le serveur
    const app = express();
    let server = app.listen(3000);

    const port = process.env.PORT || 3000;

    // Configurer le dossier des vues client
    app.set( 'views', __dirname + '/www' );
    app.use( express.static(path.join(__dirname, 'www')) );

    // Définir le moteur de rendu
    // app.engine( 'html', ejs.renderFile );
    app.set( 'view engine', 'ejs' );

    // Configurer les routes
    app.use('/', frontRoute);
//

/*
Lancer le serveur
*/
    let io = require('socket.io').listen(server);
/*
Johnny Five
*/
    var five = require("johnny-five"),
        board = new five.Board();

    io.on('connection', function (socket) {
        console.log('a user connected');

        board.on("ready", function () {
            console.log('Hello Joker');
            button = new five.Button({
                pin: 2,
                isPullup: true
            });

            button.on("down", function (value) {
                console.log('button pressed');
                socket.emit('jump', { jump: true });
            });
        });
    });