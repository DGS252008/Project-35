//Create variables here
var dog;
var happyDog;
var normDog;
var databaase;
var foodS = 0;
var foodStock;

function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg1.png");
  normDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(600, 700);
  
  dog = createSprite(width/2, height/2);
  dog.addImage(normDog);
  dog.scale = 0.3;

  database = firebase.database();
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS-1);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill("navy")
  text("Food remaining: " + foodS, 185, 200)
  textSize(15);
  text("Note: Press UP ARROW KEY to feed the pet milk!", 160, 20)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food: x
  })
}



