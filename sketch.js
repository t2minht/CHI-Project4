let button, img, p;
let imgs = ['beedrill.png', "blastoise.png", "bulbasaur.png", "butterfree.png", "caterpie.png", "charizard.png","ivysaur.png","kakuna.png","metapod.png","pidgeot.png","pidgeotto.png","pidgey.png","raticate.png","rattata.png","squirtle.png","venusaur.png","wartortle.png","weedle.png"];
let pokemon = []
function preload() {
  img = loadImage('assets/pipe.png');
  p = loadImage('assets/pokemon_img/beedrill.png');
  for(let i = 0; i < 4; i++){
    for(let j =0; j < 4; j++){
      pokemon.push(loadImage('assets/pokemon_img/' + imgs[i * 4 + j]));
    }
  }
}

function setup() {
  createCanvas(1920, 1080);

  console.log(imgs[0]);
  
}

function draw(){
  background(94, 222, 247);

  //navbar
  fill(19, 142, 191);
  rect(0,0,1920,100);
  fill(0,0,0);
  textSize(50);
  text('Pokedex',900,70);
  textSize(15);
  text('Caught:16',860,90);
  text('Seen: 30',1000,90);

  //pokemon grid
  
  for(let i = 0; i < 4; i++){
    for(let j =0; j < 4; j++){
      fill(19, 142, 191);
      rect(800 + i * 150, 150 + j * 150, 80,80,5);
      image(pokemon[i  * 4 + j],800 + i * 150, 150 + j * 150);
    }
  }

  //pokemon left display
  fill(19, 142, 191);
  rect(75,150, 600,650,5);
  fill(0,0,0);
  textSize(15);
  text('Click pokemon to play sound',250,700);

  //right display
  fill(19, 142, 191);
  rect(1450,150, 400,650,5);
}
