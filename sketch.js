let button, img, p;
let imgs = ['01_bulbasaur.png', '02_ivysaur.png', '03_venusaur.png', '06_charizard.png', '07_squirtle.png', '08_wartortle.png', '09_blastoise.png', '10_caterpie.png', '11_metapod.png', '12_butterfree.png', '13_weedle.png', '14_kakuna.png', '15_beedrill.png', '16_pidgey.png', '17_pidgeotto.png', '18_pidgeot.png', '19_rattata.png', '20_raticate.png'];
let pokemon = []
let pokeButtons = []
function preload() {
  //p = loadImage('assets/pokemon_img/beedrill.png');
  for(let i = 0; i < 4; i++){
    for(let j =0; j < 4; j++){
      pokemon.push(loadImage('assets/pokemon_img/' + imgs[i * 4 + j]));
    }
  }
}

function setup() {
  createCanvas(1920, 1080);
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
  text('Background color:',1400, 45);
  myPicker = createColorPicker('red');
  myPicker.position(1450, 50);

  //pokemon grid
  for(let i = 0; i < 4; i++){
    for(let j =0; j < 4; j++){
      fill(19, 142, 191);
      rect(1300 + i * 150, 150 + j * 150, 80,80,5);
      let but = createButton("Select");
      but.position(1310 + i * 150, 240 + j * 150);
      pokeButtons.push(but);
      image(pokemon[i  * 4 + j],1300 + i * 150, 150 + j * 150);
    }
  }

  //pokemon left display
  fill(19, 142, 191);
  rect(75,150, 600,650,5);
  fill(0,0,0);
  textSize(15);
  text('Click to pet and play sound',250,200);
  

  //right display
  fill(19, 142, 191);
  rect(800,150, 400,650,5);
  let inp = createInput('Nickname');
  inp.position(250,750);
  let slider = createSlider(0, 100, 50);
  slider.position(250,700);
  slider.size(200);
 
}

function draw(){
  
  background(myPicker.value());

  //navbar
  fill(19, 142, 191);
  rect(0,0,1920,100);
  fill(0,0,0);
  textSize(50);
  text('Pokedex',900,70);
  textSize(15);
  text('Caught:16',860,90);
  text('Seen: 30',1000,90);
  text('Background color:',1400, 45);
  
  //pokemon grid
  for(let i = 0; i < 4; i++){
    for(let j =0; j < 4; j++){
      fill(19, 142, 191);
      rect(1300 + i * 150, 150 + j * 150, 80,80,5);
      image(pokemon[i  * 4 + j],1300 + i * 150, 150 + j * 150);
    }
  }

  //pokemon left display
  fill(19, 142, 191);
  rect(75,150, 600,650,5);
  fill(0,0,0);
  textSize(15);
  text('Click to pet and play sound',250,200);
  text('size',225,720);

  //right display
  fill(19, 142, 191);
  rect(800,150, 400,650,5);
}
