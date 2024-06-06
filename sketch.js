function setup() {
    createCanvas(800, 800);
    background ("pink");
  }
  
  function draw() {
    
  
    stroke("white");
    fill("blue");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }