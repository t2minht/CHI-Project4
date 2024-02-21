let button, img, p;
let imgs = ['15_beedrill.png', "09_blastoise.png", "01_bulbasaur.png", "12_butterfree.png", "10_caterpie.png", "06_charizard.png","02_ivysaur.png","14_kakuna.png","11_metapod.png","18_pidgeot.png","17_pidgeotto.png","16_pidgey.png","20_raticate.png","19_rattata.png","07_squirtle.png","03_venusaur.png","08_wartortle.png","13_weedle.png"];
let nicknames = []
let pokemon = []
let pokeButtons = []
let msg = "";
function preload() {
  img = loadImage('assets/pipe.png');
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
  myPicker = createColorPicker('cyan');
  myPicker.position(1450, 50);

  //pokemon grid
  for(let i = 0; i < 4; i++){
    for(let j =0; j < 4; j++){
      fill(19, 142, 191);
      rect(1300 + i * 150, 150 + j * 150, 80,80,5);
      let but = createButton("Select");
      but.position(1310 + i * 150, 240 + j * 150);
      pokeButtons.push(but);
      nicknames.push('');
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

  inp.input(() => {
    msg = inp.value();
    nicknames.at(0) = msg;
    fill(0,0,0);
    textSize(15);
    //text('Nickname',300,200);
    text(msg,250,200);
  });
 
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
  text('Click to pet and play sound',260,250);
  text('size',225,720);
  textSize(40);

  text(msg,250,200);

  //right display
  fill(19, 142, 191);
  rect(800,150, 400,650,5);
  
  
}
