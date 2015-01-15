//Timercode listens for click of the pause button
document.getElementById("pause_button").addEventListener("click", function(){
	pause(); 
	timer();
});




//TIMER CODE
var is_paused = false;

function pause(){
	if(is_paused){
		is_paused = false;
		document.getElementById("pause_button").innerHTML = "Pause";
	}
	else{
		is_paused = true;
		document.getElementById("pause_button").innerHTML = "Play";
	}
}

function timer(){
	setTimeout(
		function(){
			if (!(is_paused)){
				update_rand();
				timer();	
			}
		}
			,speed_slider);
}