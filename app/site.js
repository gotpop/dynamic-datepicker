var earth = new Image()
let winWidth = window.innerWidth
let winHeight = window.innerHeight
let myCanvas = document.createElement("canvas")
myCanvas.width = winWidth
myCanvas.height = winHeight
myCanvas.setAttribute('id', 'canvas')
document.body.appendChild(myCanvas)
earth.src =
"http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg"

var ctx = document.getElementById('canvas').getContext('2d')

let  radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
// ctx.translate(300, 300)
radgrad.addColorStop(0, '#A7D30C');
radgrad.addColorStop(0.9, '#019F62');
radgrad.addColorStop(1, 'rgba(1,159,98,0)');

ctx.fillStyle = radgrad;

function init() {
    window.requestAnimationFrame(draw)
}

function draw() {

  ctx.clearRect(0, 0, winWidth, winHeight) // clear canvas
  ctx.save()
  ctx.translate(100, 300)

  ctx.fillRect(0,0,150,150);

  var time = new Date()
 	ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds())
  ctx.drawImage(earth, 0, 0);
  ctx.restore();
  window.requestAnimationFrame(draw)
}

init()
