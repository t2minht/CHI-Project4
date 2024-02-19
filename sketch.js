let button, img;

function preload() {
  img = loadImage('assets/pipe.png');
}

function setup() {
  createCanvas(1200, 600);
  button = createButton('click me');
  button.position(19, 100);
  button.mousePressed(loadCamera);
}

function loadCamera(){
  image(img, 100, 0);
}
