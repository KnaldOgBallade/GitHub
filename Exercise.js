function calculate(){
	var t = widthBox.value;
	
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lengthBox").value;
	var h = document.getElementById("heightBox").value;
	
	//Convert to float
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	
	var result = w*l*h;
	
	document.getElementById("result").innerHTML = result;
}

function multiplication(){
	document.getElementById("mult-tb").innerHTML ="";
	var f = document.getElementById("factor").value;
	for(var i=1; i<=10;i++){
		var res=f*i
		
		document.getElementById("mult-tb").innerHTML += res+"<br/>"
	}
	
}