// 캔버스 설정
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

// 우주선 좌표
let spaceshipX = (canvas.width / 2) - 32;
let spaceshipY = canvas.height - 64;

// 이미지 불러오기
let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameoverImage;
function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "images/background.jpg"

  spaceshipImage = new Image();
  spaceshipImage.src = "images/spaceship.png";

  bulletImage = new Image();
  bulletImage.src = "images/bullet.png";

  enemyImage = new Image();
  enemyImage.src = "images/enemy.png";

  gameoverImage = new Image();
  gameoverImage.src = "images/gameover.png";
}

// 이미지 보여주기
function render() {
  // background Image 그리기
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

// render() 계속 보여주기
function main() {
  render();
  console.log("animation call main function");
  requestAnimationFrame(main);
}

loadImage();
main();