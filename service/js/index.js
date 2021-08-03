// X 

var tr = document.getElementById("ture");
var fa = document.getElementById("false");
var nav = document.getElementById("content");
var num = 0;
// nav.style.opacity = "0";
function show(i) {
	
	num++;
	if (num % 2 == 0) {
		tr.style.display = "block";
		fa.style.display = "none";

		nav.style.left="-100%";
		nav.style.top="64px";
		// nav.style.opacity = "0"
	} else {
		tr.style.display = "none";
		fa.style.display = "block";
		// nav.style.display = "block";
		
		nav.style.left="0";
		nav.style.top="64px";
		nav.style.transition = ".5s";
	}
}

