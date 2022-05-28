/**
 * Begins the render loop for the ball under the cursor
 *
 * stole this from alistair
 *
 * @param ball The HTML element to load the ball into
 * @return A callback to remove all listeners. This is so that you can safely use this function inside of a useEffect.
 */
export function loadCursor(ball: HTMLDivElement) {
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  let ballX = x;
  let ballY = y;

  function drawBall() {
    ballX += (x - ballX) * 0.1 - 1;
    ballY += (y - ballY) * 0.1 - 1;

    ball.style.top = `${ballY - window.scrollY}px`;
    ball.style.left = `${ballX}px`;
  }

  function loop() {
    drawBall();
    requestAnimationFrame(loop);
  }

  loop();

  function touch(event: TouchEvent) {
    x = event.touches[0].pageX;
    y = event.touches[0].pageY;
  }

  function mousemove(event: MouseEvent) {
    ball.style.opacity = "1";

    x = event.pageX;
    y = event.pageY;
  }

  function mousedown() {
    ball.style.transform = "scale(1.5)";
  }

  function mouseup() {
    ball.style.transform = "scale(1)";
  }

  window.addEventListener("touchstart", touch);
  window.addEventListener("touchmove", touch);
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mousedown", mousedown);
  window.addEventListener("mouseup", mouseup);

  return () => {
    window.removeEventListener("touchstart", touch);
    window.removeEventListener("touchmove", touch);
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mousedown", mousedown);
    window.removeEventListener("mouseup", mouseup);
  };
}
