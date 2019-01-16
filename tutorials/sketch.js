function setup() {
  xr = 0
  
  createCanvas(400,400, WEBGL);
  
}

function draw() {
  background(100);
  
  fill(255,50,50)
  rotateX(-22.5)
  
  rotateY(xr)
  xr=xr+0.01
  sphere(100)
  fill(127,127,150)
  rotateY(0-(xr/2))
  rotateX(45)
  torus(150)
}