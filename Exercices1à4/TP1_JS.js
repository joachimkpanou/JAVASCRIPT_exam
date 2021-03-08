function get_achievement(x,y,z){
	var sum=x+y+z;
	if (sum>=250) return "A";
		else if (sum>=200) return "B";
		else if (sum>=100) return "C";
		else return "D";
}
console.log(get_achievement(60,100,40));