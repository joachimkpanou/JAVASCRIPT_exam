function get_achievement(x,y,z){
	var sum=x+y+z;
	if (sum>=250) return "A";
		else if (sum>=200) return "B";
		else if (sum>=100) return "C";
		else return "D";
}

function get_pass_or_failure(x,y,z){
	
	if ((x>=60) && (y>=60) && (z>=60)) return "pass";
		else return "failure";
}


function jugement(x,y,z){

var achievement=get_achievement(x,y,z);
var pass_or_failure=get_pass_or_failure(x,y,z);
console.log("Your achievement is " + achievement);
console.log("You "+ pass_or_failure);
}

console.log(jugement(60,100,40));