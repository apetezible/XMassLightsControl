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
    Laser.on();
    LightBulb.on();
    Lights.on();
    res.render('Radio', { title: 'Express' });
  });
  /* GET {l} page. */
  router.get('/Laser', function(req, res, next) {
    Radio.on();
    Laser.off();
    LightBulb.on();
    Lights.on();
    res.render('Laser', { title: 'Express' });
  });
  /* GET {b} page. */
  router.get('/Lightbulb', function(req, res, next) {
    Radio.on();
    Laser.on();
    LightBulb.off();
    Lights.on();
    res.render('Lightbulb', { title: 'Express' });
  });
  /* GET {n} page. */
  router.get('/Lights', function(req, res, next) {
    Radio.on();
    Laser.on();
    LightBulb.on();
    Lights.off();
    res.render('Lights', { title: 'Express' });
  });
  /* GET {r;l} page. */
  router.get('/RadioLaser', function(req, res, next) {
    Radio.off();
    Laser.off();
    LightBulb.on();
    Lights.on();
    res.render('RadioLaser', { title: 'Express' });
  });
  /* GET {r;b} page. */
  router.get('/RadioLightbulb', function(req, res, next) {
    Radio.off();
    Laser.on();
    LightBulb.off();
    Lights.on();
    res.render('RadioLightbulb', { title: 'Express' });
  });
  /* GET {r;n} page. */
  router.get('/RadioLights', function(req, res, next) {
    Radio.off();
    Laser.on();
    LightBulb.on();
    Lights.off();
    res.render('RadioLights', { title: 'Express' });
  });
  /* GET {l;n} page. */
  router.get('/LaserLights', function(req, res, next) {
    Radio.on();
    Laser.off();
    LightBulb.on();
    Lights.off();
    res.render('LaserLights', { title: 'Express' });
  });
  /* GET {b;n} page. */
  router.get('/LightbulbLights', function(req, res, next) {
    Radio.on();
    Laser.on();
    LightBulb.off();
    Lights.off();
    res.render('LightbulbLights', { title: 'Express' });
  });
/* GET {l;b} page. */
router.get('/LaserLightbulb', function(req, res, next) {
  Radio.on();
  Laser.off();
  LightBulb.off();
  Lights.on();
  res.render('LaserLightbulb', { title: 'Express' });
});

module.exports = router;
