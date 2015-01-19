//Reverser


// Add event listener to the reverse button
document.getElementById("reverse_button").addEventListener("click",function(){
	rewind();
});

//Global Variables for reversing///
var is_reverse = false; // Checks if reversing

var at_start = false; // Checks if the graph is at the start

var updates_back = 1;

var showing_update_num;
///////////////////////////////////

//update_reverse: Rewinds through previously generated elements in the chart_data array
// PRE: True
// POST: Updates screen elements, increments updates_back. Or does nothing if at beginning of data
function update_reverse(){
	//Display pause, Do nothing when at start
	if (at_start){
		document.getElementById("direction").innerHTML = "Paused";
		return;
	}

	//get the appropriate section of data from the chart_data array to display
	display_data = chart_data.slice(-101-updates_back,-updates_back);

	//increment how far back the user has rewound
	updates_back++;
	
	//draw the line
	draw_line(display_data);

	//update the "SHOWING UPDATE: X" field, if at the beginning of data, change boolean at_start to true
	if (typeof display_data[100]=== 'undefined'){
		at_start = true;
	  	document.getElementById("showing").innerHTML = "OLD DATA - Showing update: OFF THE CHARTS , " + showing_update_num ;
	}
	else{
		showing_update_num = display_data[100].update_number;
		document.getElementById("showing").innerHTML = "OLD DATA - Showing update: " + display_data[100].update_number;
	}
}

//rewind: Launched when reverse button is clicked
//PRE: True
//POST: Data will start being shown in reverse
function rewind(){
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
