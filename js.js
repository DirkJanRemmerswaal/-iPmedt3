window.onload = function(){
	var start = document.getElementById("start");
	var telefoon = document.getElementById("music");
	var knop = document.getElementById("knop1");
	var speaker = document.getElementById("speaker");
	var aanuit;
	var entity = document.querySelector('[sound]');
	var stekker = document.getElementById("stekker");
	var stopcontact = document.getElementById("stopcontact");
	var cursor = document.getElementById("cursor")
	var camera = document.getElementById("camera")
	var cameraRechts = document.getElementById("cameraRechts")
	var cameraLinks = document.getElementById("cameraLinks")
	var cameraAchter = document.getElementById("cameraAchter")
	var cameraVoor = document.getElementById("cameraVoor")
	var cameraBoven = document.getElementById("cameraBoven")


	start.onclick = function(){
		start.remove();
		document.getElementById("scene").style.visibility = 'visible';
	}

	knop.onclick = function(){
		if(aanuit != 1){
			entity.components.sound.stopSound();
			entity.components.sound.playSound();
			aanuit = 1;
		}else{
			entity.components.sound.stopSound();
			aanuit = 0;;
		}
	}
	stekker.onclick = function(){
		cursor.appendChild(stekker)
		stekker.setAttribute("position", "0.5 -0.3 0");
	}
	stopcontact.onclick = function(){
		cursor.removeChild(stekker)
		stopcontact.appendChild(stekker)
		stekker.setAttribute("position", "0.5 .02 0.45");
		stekker.setAttribute("rotation", "35 320 90")
	}

	cameraRechts.onclick = function(){
		camera.setAttribute("position", "3 1.5 -3")
		camera.setAttribute("rotation", "0 90 0")
	}

	cameraLinks.onclick = function(){
		camera.setAttribute("position", "-3 1.5 -3")
		camera.setAttribute("rotation", "0 270 0")
	}

	cameraAchter.onclick = function(){
		camera.setAttribute("position", "0 1.5 -6")
		camera.setAttribute("rotation", "0 180 0")
	}

	cameraVoor.onclick = function(){
		camera.setAttribute("position", "0 1.5 -0")
		camera.setAttribute("rotation", "0 0 0")
	}

	cameraBoven.onclick = function(){
		camera.setAttribute("position", "0 2.1 -2.2")
		camera.setAttribute("rotation", "290 0 0")
	}
}
