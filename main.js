var chao, chaoImg;
var chaoInvisivel;

var aranha, aranhaImg;

function preload() {
  aranhaImg = loadImage("img/aranha.png");
  chaoImg = loadImage("img/chao.png");
}

function setup() {
  createCanvas(1348, 630);

  aranha = createSprite(200, 300, 20, 20);
  aranha.addImage("aranha", aranhaImg);
  aranha.scale = 0.2;
  aranha.x = 600;

  chao = createSprite(250, 600, 200, 200);
  chao.addImage("chao", chaoImg);
  chao.scale = 0.8;
  chao.x = 600;

  chaoInvisivel = createSprite(600, 570, 400, 5);
  chaoInvisivel.visible = false;
}
function draw() {
  background("#7EB2DD");

  fill("#931621");
  text("Aperta espaço para pular", 530, 100);

  fill("black");
  text("HOMEM ARANHA", 30, 30);

  if (chao.x < 0) {
    chao.x = chao.width / 2;
  }

  if (keyDown("space")) {
    aranha.velocityY = -10;
  }
  aranha.velocityY = aranha.velocityY + 0.8;
  aranha.collide(chaoInvisivel);

  drawSprites();
}
