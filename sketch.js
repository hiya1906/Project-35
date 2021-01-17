//Create variables here
var dogImage1, dogImage2;
var dog, happyDog, database, foodS, foodStock;

function preload(){
  dogImage1 = loadImage("images/dogImg.png");
  dogImage2 = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(800,800);
  dog = createSprite(400,400,50,50);
  //imageMode(CENTER);
  dog.addImage(dogImage1);

  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
  background(46,139,87);
  fill("black");
  stroke(50);
  text("Press the up arrow to feed the dog!",200,100);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage2);
  }

  drawSprites();
  //add styles here
}

function readStock(){
  foodS = data.val();
}

function writeStock(){
  database.ref('/').update({
    Food:x
  })
}


