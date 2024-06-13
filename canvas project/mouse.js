//MOUSE TRACKER FUNCTION
//***************************************************
//MOUSE TRACKER
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX.toFixed(0) + "  Y: " + mouseY.toFixed(0));
}
// ***************************************************

