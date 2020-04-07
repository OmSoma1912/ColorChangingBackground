var r = 0;
var g = 0;
var b = 0;
function setup(){
  createCanvas(600,600);
}
function draw(){
  let x1 = map(mouseX, 0, 300, 0, 300);
  background(r + x1,g + x1,b + x1);
  fill("white");
  ellipse(x1, 25, 25, 25);
}