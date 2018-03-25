function dochange() {
	alert('Clicked button with a javascript code now!');
}

function changecolor() {
	
	var dd1 = document.getElementById("d1");
	var dd2 = document.getElementById("d2");

	dd1.className = "blueback";
	dd2.className = "yellowback";
}

function changetext() {
	
	var dd1 = document.getElementById("d1");
	var dd2 = document.getElementById("d2");

	dd1.innerHTML = "Bonjour!";
	dd2.innerHTML = "Sayonara";
}

function dolime() {
	
	var cn1 = document.getElementById("cn1");

	cn1.style.backgroundColor="lime"
}

function resetcanvas() {
	
	var cn1 = document.getElementById("cn1");

	cn1.style.backgroundColor="white";
	
	ctxcn = cn1.getContext("2d");
	ctxcn.clearRect(0,0,cn1.width,cn1.height);

}

function drawbluesquare() {
	
	var cn1 = document.getElementById("cn1");

	ctxcn = cn1.getContext("2d");
	ctxcn.fillStyle = "blue";
	ctxcn.fillRect(10,10,40,40);

	ctxcn.fillStyle = "black";
	ctxcn.font= "30px Arial";
	ctxcn.fillText("Hello",10,80);
}
