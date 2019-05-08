var a = document.getElementById("first");
var b = document.getElementById("second");
var c = document.getElementById("third");
var button = document.getElementById("ok_button");
button.addEventListener("click", function(){
	console.log("Result: " + a.value + ", " + b.value + ", " + c.value);
});
