var Canvas = document.getElementById('canvas');
var PlainPi = Canvas.getContext("2d");

Canvas.width  = window.innerWidth;
Canvas.height = window.innerHeight;

var Phi = new Image();
Phi.src = "../images/Phi.png";

var MannStereo = document.getElementById("MannSound");

Phi.addEventListener("load", draw);


function draw(){
PlainPi.drawImage(Phi, 0, 0);
MannStereo.play();
}
