const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    noStroke()
    textSize(25)
    fill("white");
    text("Time:  "+hour,width-300,50);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON= await response.json();
    // write code slice the datetime
   // console.log(responseJSON.datetime);
    hour = responseJSON.datetime.slice(11,13);
    console.log(hour);
    // add conditions to change the background images from sunrise to sunset
  if(hour<=04 && hour>=06){
      bg="sunrise1.png";
  }else if(hour>=06 && hour<=08){
      bg="sunrise2.png";
  }else if(hour>=06 && hour<=08){
    bg="sunrise2.png";
  }else if(hour>=08 && hour<=09){
    bg="sunrise3.png";
  }else if(hour>=09 && hour<=10){
    bg="sunrise4.png";
  }else if(hour>=11 && hour<=13){
    bg="sunrise5.png";
  }else if(hour>=13 && hour<=16){
    bg="sunrise6.png";
  }else if(hour>=16 && hour<=17){
    bg="sunset7.png";
  }else if(hour>=17 && hour<=18){
    bg="sunset8.png";
  }else if(hour>=18 && hour<=19){
    bg="sunset10.png";
  }else if(hour>=19 && hour<=20){
    bg="sunset11.png";
  }else if(hour>=20 && hour<=06){
    bg="sunset7.png";
  }

    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg);

}
