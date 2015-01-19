//Timercode listens for click of the pause button
document.getElementById("pause_button").addEventListener("click", function(){
	toggle_pause();
	timer();
});



//TIMER CODE
var is_paused = false;

//toggle_pause: toggles is_paused boolean and updates the screen
//PRE: True
//POST: Pauses/Resumes graph updates and screen elements.
function toggle_pause(){
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

//timer: schedules updates for the graph. Speed of updates controlled by slider
//PRE: True
//POST: Launches updates at an interval determined by the value of the speed slider
function timer(){
	setTimeout(
		function(){
			if (is_paused){
				return;
			}
			else if (is_reverse){
				update_reverse();
				return timer();
			}
			else{
				update_rand();
				return timer();	
			}
		}
			,speed_slider);
}