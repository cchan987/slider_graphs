//Timercode listens for click of the pause button
document.getElementById("pause_button").addEventListener("click", function(){pause(); timer();
});

//TIMER CODE
var is_paused = false;

function pause(){
	if(is_paused){
		is_paused = false;
	}
	else{
		is_paused = true;
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