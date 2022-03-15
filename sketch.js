var runner,runnerimagem;
var solo,soloimagem



function preload(){
  //imagens pré-carregadas
runnerimagem=loadAnimation("Runner-1.png","Runner-2.png")
soloimagem=loadImage("path.png")


}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  solo=createSprite(200,200)
  solo.addImage(soloimagem)
runner=createSprite(200,300)
runner.addAnimation("garoto",runnerimagem)
runner.scale=0.05
}

function draw() {
  background(0);
  solo.velocityY=3
  if(solo.y>400){
    solo.y=height/2
  }
  runner.x=World.mouseX
drawSprites()
}
