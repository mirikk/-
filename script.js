// Task 1
var time = 234245645335;
var seconds = 3600;
var result = time%seconds;
console.log("Result: " + result);

// ========================================

// Task 2

var string = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at." ;
var list = [];
for (var i = 0; i < string.length; i++){
	if (string[i]=="a"){
			list.push(i);
	}
}
console.log("Result: " + list); 