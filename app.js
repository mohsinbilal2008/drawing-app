const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const big = document.querySelector(".big");
const small = document.querySelector(".small");
const medium = document.querySelector(".medium");
const get = document.querySelector(".styles");
const sizes = document.querySelector("#sizes");
const cancel = document.querySelector(".cancel");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
document.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
let painting = false;
function startPosition(e) {
  painting = true;
  draw(e);
}
function finishedPosition() {
  ctx.beginPath();
  painting = false;
}
function draw(e) {
  if (!painting) return;
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);
get.addEventListener("click", () => {
  sizes.style.display = "flex";
});
cancel.addEventListener("click", () => {
  sizes.style.display = "none";
});
big.addEventListener("click", function () {
  ctx.lineWidth = 10;
});
