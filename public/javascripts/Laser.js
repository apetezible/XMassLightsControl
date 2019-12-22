var Canvas = document.getElementById('canvas');
var PlainPi = Canvas.getContext("2d");

Canvas.width  = window.innerWidth;
Canvas.height = window.innerHeight;

var a = [780, 170];
var b = [978, 170];
var c = [780, 380];
var d = [978, 380];

var Phi = new Image();
Phi.src = "../images/Laser.png";

Phi.addEventListener("load", draw);


function draw(){
PlainPi.drawImage(Phi, 0, 0);
}

Canvas.addEventListener("click", turnOff);
function turnOff(Click){
  if ((Click.layerX>a[0])&&(Click.layerX<b[0])){
    if ((Click.layerY>a[1])&&(Click.layerY<c[1])){
      window.location.href = '/';
    }
  }
}
