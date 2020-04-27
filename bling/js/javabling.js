function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');

	var pic = new Image();
	pic.src="files/bling_logo.png";
	pic.addEventListener("load", function(){canvas.drawImage(pic,0,0)}, false);
}

window.addEventListener("load", doFirst, false;