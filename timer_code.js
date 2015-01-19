//Timercode listens for click of the pause button
document.getElementById("pause_button").addEventListener("click", function(){
	toggle_pause();
	timer();
});

document.getElementById("reverse_button").addEventListener("click",function(){
	rewind();
});


//TO BE IMPROVED GREATLY
//Currently requires double buffer size memory



//TIMER CODE
var is_paused = false;

function toggle_pause(){
	console.log("is_paused");
	if(is_paused){
		is_paused = false;
		document.getElementById("pause_button").innerHTML = "Pause";
		if (is_reverse){
			document.getElementById("direction").innerHTML = "Going Backward"
		}
		else{
			document.getElementById("direction").innerHTML = "Going Forward"
		}
	}
	else{
		is_paused = true;
		document.getElementById("pause_button").innerHTML = "Play";
		document.getElementById("direction").innerHTML = "Paused"
	}
}

function timer(){
	setTimeout(
		function(){
			if (is_paused){
				return;
			}
			else {
				if (is_reverse){
					update_reverse();
					return timer();
				}
				else{
					update_rand();
					return timer();	
				}
			}
		}
			,speed_slider);
}