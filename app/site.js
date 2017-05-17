var earth = new Image();
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
let myCanvas = document.createElement("canvas");
myCanvas.width = winWidth;
myCanvas.height = winHeight;
myCanvas.setAttribute('id', 'canvas')
document.body.appendChild(myCanvas);
earth.src =
"http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";

function init() {
    window.requestAnimationFrame(draw);
}


function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.clearRect(0, 0, winWidth, winHeight); // clear canvas
  ctx.save();
  ctx.translate(200, 200);

  // Earth
  var time = new Date();
 	ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  // ctx.translate(105, 0);
  ctx.drawImage(earth, 50, 50);
  ctx.restore();
  window.requestAnimationFrame(draw);
}

init();
