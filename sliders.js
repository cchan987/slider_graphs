
//Input slider code////////////////////
var input_slider;

// when the input range changes update
d3.select("#nRadius").on("input", function() {
  input_update(+this.value);
});

input_update(5);

// update the elements
function input_update(nRadius) {

  // adjust the text on the range slider
  
  d3.select("#nRadius-value").text(nRadius);
  d3.select("#nRadius").property("value", nRadius);

  input_slider = nRadius;


}
/////////////////////////////

//Speed slider code////////////////////
var speed_slider;

// when the input range changes update
d3.select("#speed").on("input", function() {
  speed_update(+this.value);
});

speed_update(50);

// update the elements
function speed_update(speed) {

  // adjust the text on the range slider
  
  d3.select("#speed-value").text(speed);
  d3.select("#speed").property("value", speed);

  speed_slider = speed;


}
////////////////////////////