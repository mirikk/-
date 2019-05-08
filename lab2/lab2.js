function isempty(obj){
	for (var key in obj){
		return false;
	}
	return true;

}

var a = {};
console.log(isempty(a));

a["A"] = "B";
console.log(isempty(a));