var express = require('express');
var JohnnyFive = require("johnny-five");

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET {r} page. */

router.get('/Radio', function(req, res, next) {

  var Board = new JohnnyFive.Board();

  Board.on("ready", function() {
    var Radio = new five.Led(5);
    var Laser = new five.Led(4);
    var LightBulb = new five.Led(3);
    var Lights = new five.Led(2);

    Radio.on();
    Laser.on();
    LightBulb.on();
    Lights.on();

    Radio.off();
  });

  res.render('Radio', { title: 'Express' });
});

module.exports = router;
