var Canvas = document.getElementById('canvas');
var PlainPi = Canvas.getContext("2d");

Canvas.width  = window.innerWidth;
Canvas.height = window.innerHeight;

var Phi = new Image();
Phi.src = "../images/Phi.png";

Phi.addEventListener("load", draw);

function draw(){
PlainPi.drawImage(Phi, 0, 0);
}

Canvas.addEventListener("click", goTo);

function goTo(Click){
  if ((Click.layerX>0)&&(Click.layerX<170)){
    if ((Click.layerY>345)&&(Click.layerY<515)){
      window.location.href = '/Radio';
    }
  }
}
