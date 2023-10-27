let sky = document.querySelector(".HomePageBgLayer1");

var body = document.body,
  html = document.documentElement;

var PageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
var PageWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

function createDiv(size) {
  let circle = document.createElement("div");
  circle.classList.add("Stars");

  let randRange5 = Math.floor(Math.random() * 5) + 1;
  circle.classList.add(`blink_${randRange5}`);

  let widthAndHeight = random(size, "px");
  circle.style.height = circle.style.width = widthAndHeight;

  circle.style.left = random(PageWidth, "px");
  circle.style.top = random(PageHeight, "px");

  sky.appendChild(circle);
}

function paintStars(stars, size) {
  while (sky.firstChild) {
    sky.removeChild(sky.firstChild);
  }
  for (let i = 0; i < stars; i++) {
    createDiv(size);
  }
}

function random(range, unit) {
  let randNum = Math.floor(Math.random() * range) + 1;
  return `${randNum}${unit}`;
}

paintStars(400, 5);
