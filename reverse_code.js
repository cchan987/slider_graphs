//Reverser


// Add event listener to the reverse button
document.getElementById("reverse_button").addEventListener("click",function(){
	rewind();
});

//Variables for reversing
var is_reverse = false;

var updates_back = 0;
//////////////////////////

//Move backwards in the data
function update_reverse(){
	//used for holding the graph
	var display_data;

	display_data = chart_data.slice(-101-updates_back,-updates_back);

	updates_back++;

	//console.log(reverse_holder_len);
	//console.log(display_data.length);
	draw_line(display_data);
	//forward_data.unshift(holder.pop());

	if (typeof display_data[100]=== 'undefined'){
	  document.getElementById("showing").innerHTML = "Showing update: 0";
	}
	else{
	  document.getElementById("showing").innerHTML = "Showing update: " + display_data[100].update_number;
	}
}

function rewind(){
	
  	//reverse_all_data_holder = chart_data;

	console.log("rewind");
	if(is_reverse){
		is_reverse = false;
		document.getElementById("reverse_button").innerHTML = "Reverse";
		document.getElementById("direction").innerHTML = "Going Forward";
	}
	else{
		is_reverse = true;
		document.getElementById("reverse_button").innerHTML = "Forward";
		document.getElementById("direction").innerHTML = "Going Backward";
	}
}
