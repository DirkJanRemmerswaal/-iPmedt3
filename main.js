//@Author: Jeroen Rijsdijk
//@Func: VR star wars prototype, connection to SWAPI

//jquery equivalent voor window.onload

$(document).ready(function(){

  console.log("main.js geladen");
  //Vraag aframe scene op
  var scene = document.getElementById('scene');
  setTimeout(function(){
  	$('#tf1').remove();
  	appendBox();
  }, 11000);

  function appendBox(){
  	$('#scene').append('<a-box id="box" color="red" position="1 1.8 -3" depth="1" height="1" width="1"></a-box>');
  	var box = document.getElementById("box");
  	box.onmouseenter = function(){
  		var xhttp = new XMLHttpRequest();

  		xhttp.onreadystatechange = function(){
  			if(this.readyState == 4 && this.status ==  200){
  				var response = JSON.parse(this.responseText);
  				$('#text').remove();
  				$('#scene').append('<a-entity id="text" text="value:' + response.name + '; color:white" position="0 1.8 -1" </a-entity>')
  			}
  		}
  		var random = Math.ceil(Math.random() * 87)
  		xhttp.open("GET", "https://swapi.co/api/people/" + random, true)
  		xhttp.send();
  	}
  }

  var bal1 = document.getElementById('bal1');
  var bal2 = document.getElementById('bal2');
  var box1 = document.getElementById('box1');
  var box2 = document.getElementById('box2');
  bal1.onmouseenter = function(){
  	bal1.setAttribute('dynamic-body', '');
  }
  bal2.onmouseenter = function(){
  	bal2.setAttribute('dynamic-body', '');
  }
  box1.addEventListener('collide', function (e) {
 
  	var xhttp = new XMLHttpRequest();

  	xhttp.onreadystatechange = function(){
  		if(this.readyState == 4 && this.status ==  200){
  			var response = JSON.parse(this.responseText);
  			$('#text').remove();
  			$('#scene').append('<a-entity id="text" text="value:' + response.title + '; color:white" position="0 1.8 -1" </a-entity>')
  		}
  	}
  	var random = Math.ceil(Math.random() * 7)
  	xhttp.open("GET", "https://swapi.co/api/films/" + random, true)
  	xhttp.send();
  	
  });

});
