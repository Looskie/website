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

  const drawBall = () => {
    ballX += (x - ballX) * 0.1 - 1;
    ballY += (y - ballY) * 0.1 - 1;

    ball.style.top = `${ballY - window.scrollY}px`;
    ball.style.left = `${ballX - window.scrollX}px`;
  };

  const loop = () => {
    drawBall();
    requestAnimationFrame(loop);
  };

  loop();

  const touch = (event: TouchEvent) => {
    x = event.touches[0].pageX;
    y = event.touches[0].pageY;
  };

  const mouseMove = (event: MouseEvent) => {
    x = event.pageX;
    y = event.pageY;
  };

  const mouseDown = () => (ball.style.transform = "scale(1.5)");
  const mouseUp = () => (ball.style.transform = "scale(1)");

  window.addEventListener("touchstart", touch);
  window.addEventListener("touchmove", touch);
  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("mousedown", mouseDown);
  window.addEventListener("mouseup", mouseUp);

  return () => {
    window.removeEventListener("touchstart", touch);
    window.removeEventListener("touchmove", touch);
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mousedown", mouseDown);
    window.removeEventListener("mouseup", mouseUp);
  };
}