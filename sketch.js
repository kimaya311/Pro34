//Create variables here
var dog, happyDog;
var dogImage;
var foodS, foodStock;
var database;
function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,40,40);
  dog.addImage("dog",dogImage);
  database = firebase.database();
  foodStock = database.ref('Food/value');
  foodStock.on("value",readStock);
}

function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
 fill("white");
 stroke("white");
 text("Food remaining: "+foodS,150,180,textSize(16));
text("Note:Press UP ARROW key to feed Drago milk!",50,40,textSize(20));
}
//function to read values from DB
function readStock(data){
  foodS= data.val();
}

//function to write values from DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('Food/value').set({
   Food:x
  })
}


