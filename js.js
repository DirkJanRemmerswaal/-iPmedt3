window.onload = function(){
	var start = document.getElementById("start");
	var telefoon = document.getElementById("music");
	var knop = document.getElementById("knop1");
	var speaker = document.getElementById("knop2");
	var aanuit;
	var aanuit2;
	var entity = document.getElementById("hoi");
	var entity2 = document.getElementById("on");
	var entity3 = document.getElementById("off");
	var stekker = document.getElementById("stekker");
	var stopcontact = document.getElementById("stopcontact");
	var cursor = document.getElementById("cursor")
	var camera = document.getElementById("camera")
	var cameraRechts = document.getElementById("cameraRechts")
	var cameraLinks = document.getElementById("cameraLinks")
	var cameraAchter = document.getElementById("cameraAchter")
	var cameraVoor = document.getElementById("cameraVoor")
	var cameraBoven = document.getElementById("cameraBoven")

	var knop1_1 = document.getElementById("knop1_1")
	var knop1_2 = document.getElementById("knop1_2")
	var knop1_3 = document.getElementById("knop1_3")
	var knop1_4 = document.getElementById("knop1_4")

	var knop2_1 = document.getElementById("knop2_1")
	var knop2_2 = document.getElementById("knop2_2")
	var knop2_3 = document.getElementById("knop2_3")

	var knop3_1 = document.getElementById("knop3_1")
	var knop3_2 = document.getElementById("knop3_2")
	var knop3_3 = document.getElementById("knop3_3")
	var knop3_4 = document.getElementById("knop3_4")

	var iframeElement   = document.querySelector('iframe');
	var soundcloudmusic	= document.getElementById("soundcloudmusic")
	var iframeElementID = iframeElement.id;
	var widget1         = SC.Widget(iframeElement);
	var widget2         = SC.Widget(iframeElementID);
	var vol;
	var volgende				= document.getElementById("volgende");
	var playpause				= document.getElementById("playpause");
	var vorige					= document.getElementById("vorige");

	// volgende.onclick = function(){
	// 	widget1.next();
	// };

	// vorige.onclick = function(){
	// 	widget1.prev();
	// };

	// playpause.onclick = function(){
	// 	if(aanuit != 1 && aanuit2 == 1){
	// 		widget1.play();
	// 		aanuit = 1;
	// 	}else{
	// 		widget1.pause();
	// 		aanuit = 0;
	// 	}
	// };

	function volumeUp(){
		widget1.getVolume(function(vol){
        console.log(vol);
				if(vol < 100){
					vol = vol + 10;
					console.log();
					widget1.setVolume(vol);
					console.log(vol);
				}
			});
	}

	function volumeDown(){
		widget1.getVolume(function(vol){
        console.log(vol);
				if(vol > 0){
					vol = vol - 10;
					console.log();
					widget1.setVolume(vol);
					console.log(vol);
				}
			});
	}

	start.onclick = function(){
		start.remove();
	}

	widget1.bind(SC.Widget.Events.PLAY, function(){
		document.getElementById("scene").style.display = 'block';
		widget1.unbind(SC.Widget.Events.PLAY)
		widget1.pause();
	});

	knop1_1.onclick = function(){
		var view = document.getElementById("animatie1_1")
		view.emit("startAnimation");
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
	}

	knop1_2.onclick = function(){
		var view = document.getElementById("animatie1_2")
		view.emit("startAnimation");
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
	}

	knop1_3.onclick = function(){
		var view = document.getElementById("animatie1_3")
		view.emit("startAnimation");
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
	}

	knop1_4.onclick = function(){
		var view = document.getElementById("animatie1_4")
		view.emit("startAnimation");
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
	}

	knop2_1.onclick = function(){
		var view = document.getElementById("animatie2_1")
		view.emit("startAnimation");
		volumeUp();
		setTimeout(function() {
			view.emit("startAnimation");

		}, 600);
	}

	knop2_2.onclick = function(){
		var view = document.getElementById("animatie2_2")
		view.emit("startAnimation");
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
		if(aanuit2 != 1){
			entity2.components.sound.stopSound();
			entity2.components.sound.playSound();
			aanuit2 = 1;
		}else{
			entity3.components.sound.stopSound();
			widget1.pause();
			entity3.components.sound.playSound();
			aanuit = 0;
			aanuit2 = 0;
		}
	}

	knop2_3.onclick = function(){
		var view = document.getElementById("animatie2_3")
		view.emit("startAnimation");
		volumeDown();
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
	}

	knop3_1.onclick = function(){
		var view = document.getElementById("animatie3_1")
		view.emit("startAnimation");
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
	}

	knop3_2.onclick = function(){
		var view = document.getElementById("animatie3_2")
		view.emit("startAnimation");
		widget1.next();
		widget1.seekTo(0);
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
	}

	knop3_3.onclick = function(){
		var view = document.getElementById("animatie3_3")
		view.emit("startAnimation");
		widget1.toggle();
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
	}

	knop3_4.onclick = function(){
		var view = document.getElementById("animatie3_4")
		view.emit("startAnimation");
		widget1.prev();
		widget1.seekTo(0);
		setTimeout(function() {
			view.emit("startAnimation");
		}, 600);
	}

	start.onclick = function(){
		start.remove();
		document.getElementById("scene").style.visibility = 'visible';
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
		camera.setAttribute("position", "0 2.6 -2.2")
		camera.setAttribute("rotation", "290 0 0")
	}
}
