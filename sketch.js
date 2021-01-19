var canvas,sarface1,sarface2,sarface3,sarface4;
var music,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    ball=createSprite(300,50,40,40);
sarface1=createSprite(530,599,150,40);
sarface2=createSprite(375,599,150,40);
sarface3=createSprite(220,599,150,40);
sarface4=createSprite(65,599,150,40);
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   ball.bounceoff(eages)
if(sarface1.isTouching(ball)&& ball.bounceoff(sarface1)){
sarface1.shapecolour=("red")
}

    //add condition to check if box touching surface and make it box
    
    drawSprites();
}
function keyPressed(){

    
    if (keyCode === LEFT_ARROW) {
      ball.velocityX = -5;
      ball.velocityY= 5;
    }
}