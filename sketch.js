let roster = [];

let randomIndex;
let animating = false;
let spooky = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnvs;
let nameInputs = [];
let firstTime = true;

function preload() {

  for (let i = 0; i <= 10; i++) {
    spooky[i] = loadImage(`assets/spooky_${i}.jpg`)
  }

}

function setup() {
  cnvs = createCanvas(600, 600);
  cnvs.parent("#canvasDiv");

  background(255);
  textSize(24);
  imageMode(CENTER);
  frameRate(8);

  //button = createButton("randomize");
  startRandomizerButton = select("#randButton");
  startRandomizerButton.mousePressed(buttonPressed);

  addMoreButton = select("#addMoreButton");
  addMoreButton.mousePressed(addAnotherInput);


for (let i = 0; i < 3; i++){
nameInputs.push(createInput());
nameInputs[nameInputs.length -
  1].parent("#inputFields");
}

}

function draw() {


  if (animating == true) {
    clear();
    image(spooky[imageCounter], width / 2,
      height / 2);
    if (imageCounter < spooky.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }

}

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -
  1].parent("#inputFields");


}


function randomizer() {
  animating = false;

  if (roster[0]) {

    //this displays random name and splices it out of array

    //background(random(200, 255));
    clear();
    randomIndex = int(random(roster.length));
    image(random(spooky), width / 2,
      height / 2);
    text(roster[randomIndex], width/2, height - 55);
    //text(roster[randomIndex].firstName  + "'s favorite color is " + roster[randomIndex].color, 50, 50);
    roster.splice(randomIndex, 1);
    } else {
    background(random(200, 255));
    text("nothing left!", width/2, width/2);
  }
}

function buttonPressed() {

if (firstTime){
  for (let i = 0; i < nameInputs.length; i++){
    roster.push(nameInputs[i].value());
  }
  firstTime = false;

}

  animating = true;
  setTimeout(randomizer, 2000);

}
