
var aranha, aranhaImg;

var groundInvisive;

var estado = "play";

function preload() {
  aranhaImg = loadImage("img/homem.png");
}

function setup() {
  createCanvas(1348, 630);

  aranha = createSprite(620, 280, 20, 20);
  aranha.addAnimation("aranha", aranhaImg);
  aranha.scale = 0.5;

  groundInvisive = createSprite(620, 200, 20, 20);
  groundInvisive.visible = false;
}

function draw() {
  background("#341CD0");

  if (estado === "play") {
    if (keyDown("space")) {
      aranha.velocityY = -3;
    }

    aranha.velocityY = aranha.velocityY + 0.8;
    aranha.collide(groundInvisive);
  }

  drawSprites();
}
