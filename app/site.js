var earth = new Image();
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;



function init() {

    let myCanvas = document.createElement("canvas");

    myCanvas.width = winWidth;
    myCanvas.height = winHeight;
    myCanvas.setAttribute('id', 'canvas')

    var ctx = myCanvas.getContext("2d");

    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 200, 20).rotate(((2 * Math.PI) / 2) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds())

    };
    img.src =
        "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";

    document.body.appendChild(myCanvas);


    earth.src =
        "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";
    window.requestAnimationFrame(draw);
}


function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.clearRect(0, 0, winWidth, winHeight); // clear canvas
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
 	ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.drawImage(earth, -12, -12);
  ctx.restore();
  window.requestAnimationFrame(draw);
}

init();
