let button, img, p;
let imgs = ['01_bulbasaur.png', '02_ivysaur.png', '03_venusaur.png', '04_charmander.png', '05_charmeleon.png', '06_charizard.png', '07_squirtle.png', '08_wartortle.png', '09_blastoise.png', '10_caterpie.png', '11_metapod.png', '12_butterfree.png', '13_weedle.png', '14_kakuna.png', '15_beedrill.png', '16_pidgey.png', '17_pidgeotto.png', '18_pidgeot.png', '19_rattata.png', '20_raticate.png'];
let crys = ['01_bulbasaur.mp3', '02_ivysaur.mp3', '03_venusaur.mp3', '04_charmander.mp3', '05_charmeleon.mp3', '06_charizard.mp3', '07_squirtle.mp3', '08_wartortle.mp3', '09_blastoise.mp3', '10_caterpie.mp3', '11_metapod.mp3', '12_butterfree.mp3', '13_weedle.mp3', '14_kakuna.mp3', '15_beedrill.mp3', '16_pidgey.mp3', '17_pidgeotto.mp3', '18_pidgeot.mp3', '19_rattata.mp3', '20_raticate.mp3'];
let txts = ['01_bulbasaur.txt', '02_ivysaur.txt', '03_venusaur.txt', '04_charmander.txt', '05_charmeleon.txt', '06_charizard.txt', '07_squirtle.txt', '08_wartortle.txt', '09_blastoise.txt', '10_caterpie.txt', '11_metapod.txt', '12_butterfree.txt', '13_weedle.txt', '14_kakuna.txt', '15_beedrill.txt', '16_pidgey.txt', '17_pidgeotto.txt', '18_pidgeot.txt', '19_rattata.txt', '20_raticate.txt'];
let nicknames = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate'];
let pokemon = [];
let sounds = [];
let currentPokemon = -1;
let sizeVal = 0;
let x = 0;
let y = 0;
let data = [];
let pokeButtons = []
let myPicker;
let msg;
let slider;
let inp;

function buttonClick(){
  currentPokemon = this.value();
  msg = nicknames[currentPokemon];
  inp.value(nicknames[currentPokemon]);
}

function preload() {
  soundFormats('mp3', 'ogg');
  for(let i = 0; i < 5; i++){
    for(let j =0; j < 4; j++){
      pokemon.push(loadImage('assets/pokemon_img/' + imgs[i * 4 + j]));
      sounds.push(loadSound('assets/pokemon_cry/' + crys[i * 4 + j]));
      data.push(loadImage('assets/pokemon_data/' + (i * 4 + j+1) + '.png'));
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
  pokemonIndex = 0
  for(let i = 0; i < 5; i++){
    for(let j =0; j < 4; j++){
      fill(19, 142, 191);
      rect(1300 + j * 150, 150 + i * 150, 80,80,5);
      // val = imgs[pokemonIndex++].split(".")[0]
      textSize(45);
      but = createButton("select", str(pokemonIndex++));
      but.mousePressed(buttonClick);
      but.position(1310 + j * 150, 240 + i * 150);
      pokeButtons.push(but);
      // nicknames.push('');
       image(pokemon[i  * 4 + j],1300 + j * 150, 150 +i * 150);
    }
  }

  

  //pokemon left display
  fill(19, 142, 191); 
  rect(75,150, 600,650,5);
  fill(0,0,0);
  textSize(15);
  text('Click to pet and play sound',250,100);
  

  //right display
  fill(19, 142, 191);
  rect(800,150, 400,650,5);
  inp = createInput(nicknames[currentPokemon]);
  inp.position(250,750);
  slider = createSlider(0, 100, 50);
  slider.position(250,700);
  slider.size(200);

  inp.input(() => {
    let newName = inp.value();
    fill(0,0,0);
    textSize(15);
    //text('Nickname',300,200);
    nicknames[currentPokemon] = newName;
    msg = newName;
    //text(msg,250,200);
  });

  msg = nicknames[currentPokemon];
 
}

function draw(){
  
  background(myPicker.value());
  
  // //right display
  fill(19, 142, 191);
  rect(800,300, 400,400,5);
  fill(0, 0, 0);
  text('Data',950,350);

  //navbar
  fill(19, 142, 191);
  rect(0,0,1920,100);
  fill(0,0,0);
  textSize(50);
  text('Pokédex',900,70);
  textSize(15);
  text('Caught: 20',860,90);
  text('Seen: 30',1000,90);
  text('Background color:',1400, 45);
  
  //pokemon grid
  for(let i = 0; i < 5; i++){
    for(let j =0; j < 4; j++){
      fill(19, 142, 191);
      rect(1300 + j * 150, 150 + i * 150, 80,80,5);
      image(pokemon[i  * 4 + j],1305 + j * 150, 160 + i * 150);
    }
  }

  //pokemon left display
  fill(19, 142, 191);
  rect(75,150, 600,650,5);
  fill(143, 222, 239);
  rect(150,250, 450,400,5);
  fill(0,0,0);
  textSize(15);
  
  textSize(25);
  text('Click to pet and play sound',230,245);
  text('Size',195,720);
  text('Nickname',125,765);
  textSize(40);
  // text(currentPokemon, 300, 300);
  // text(sizeVal,300,300);
  if(currentPokemon != -1){
    // window.alert(currentPokemon);
    sizeVal = map(slider.value(), 0, 100, 64, 480);
    x = 375 - sizeVal /2;
    y = 450 - sizeVal /2;
    image(pokemon[int(currentPokemon)], x, y, sizeVal, sizeVal);
    image(data[currentPokemon],860,420);
  }
  text(msg,275,200);

  
}

function mousePressed(){
  if(mouseX >= x + 30 && mouseX <= x + sizeVal - 30 && mouseY >= y + 30 && mouseY <= y + sizeVal - 30){
    sounds[int(currentPokemon)].play();
  }

}