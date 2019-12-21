var express = require('express');
var JohnnyFive = require("johnny-five");

var router = express.Router();

var Board = new JohnnyFive.Board({port:"COM5"});

Board.on("ready", function() {
  var Radio = new JohnnyFive.Led(5);
  var Laser = new JohnnyFive.Led(4);
  var LightBulb = new JohnnyFive.Led(3);
  var Lights = new JohnnyFive.Led(2);

  /* GET home page. */
  router.get('/', function(req, res, next) {
    Radio.on();
    Laser.on();
    LightBulb.on();
    Lights.on();
    res.render('index', { title: 'Express' });
  });

  /* GET {r} page. */

  router.get('/Radio', function(req, res, next) {
    Radio.off();
    res.render('Radio', { title: 'Express' });
  });

});

module.exports = router;
