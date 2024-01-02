const movingImg = document.getElementById('movingImg');

let speedX = 5;
let speedY = 5;
let directionX = 1;
let directionY = 1;

function moveImage() {
  const rect = movingImg.getBoundingClientRect();

  if (rect.left + speedX * directionX < 0 || rect.right + speedX * directionX > window.innerWidth) {
    directionX *= -1;
  }

  if (rect.top + speedY * directionY < 0 || rect.bottom + speedY * directionY > window.innerHeight) {
    directionY *= -1;
  }

  movingImg.style.left = rect.left + speedX * directionX + 'px';
  movingImg.style.top = rect.top + speedY * directionY + 'px';

  requestAnimationFrame(moveImage);
}

moveImage();
