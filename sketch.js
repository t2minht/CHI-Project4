let button, img;

function preload() {
  img = loadImage('assets/pipe.png');
}

function setup() {
  createCanvas(1000, 4000);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(loadCamera);
}

function loadCamera(){
  image(img, 100, 0);
}
