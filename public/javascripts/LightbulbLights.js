var Canvas = document.getElementById('canvas');
var PlainPi = Canvas.getContext("2d");

var a = [780, 170];
var b = [978, 170];
var c = [780, 380];
var d = [978, 380];
var e = [780, 680];
var f = [978, 680];
var g = [95, 660];
var h = [490, 660];
var i = [95, 996];
var j = [490, 996];

Canvas.width  = window.innerWidth;
Canvas.height = window.innerHeight;

var Phi = new Image();
Phi.src = "../images/LightbulbLights.png";

Phi.addEventListener("load", draw);


function draw(){
PlainPi.drawImage(Phi, 0, 0);
}

Canvas.addEventListener("click", turnOff);

function turnOff(Click){
  if ((Click.layerX>0)&&(Click.layerX<170)){
    if ((Click.layerY>345)&&(Click.layerY<515)){
      window.location.href = '/RadioLightbulbLights';
    }
  }
  if ((Click.layerX>a[0])&&(Click.layerX<b[0])){
    if ((Click.layerY>a[1])&&(Click.layerY<c[1])){
      window.location.href = '/LaserLightbulbLights';
    }
  }
  if ((Click.layerX>c[0])&&(Click.layerX<d[0])){
    if ((Click.layerY>c[1])&&(Click.layerY<f[1])){
      window.location.href = '/Lights';
    }
  }
  if ((Click.layerX>g[0])&&(Click.layerX<h[0])){
    if ((Click.layerY>g[1])&&(Click.layerY<j[1])){
      window.location.href = '/Lightbulb';
    }
  }
}
