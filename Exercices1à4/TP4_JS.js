function get_achievement(points){
  var sum = 0;
  for(var i=0; i<number; i++){
    sum += points[i];
  }
  if (sum>=number*100*0.8){
    return "A";
  }
  else if (sum>=number*100*0.6){
    return "B";
  }
  else if (sum>=number*100*0.4){
    return "C";
  }
  else {
    return "D";
  }
}
function get_pass_or_failure(points){
  var judge = "Pass";
  for(var i=0; i<number; i++){
    if(points[i]<60){
      judge= "failure";
      break;
    }
  }
  return judge;
}
function judgement(points){
  var achievement = get_achievement(points);
  var pass_or_failure =  get_pass_or_failure(points);
  return "Your grade is "+achievement + " and  You "+pass_or_failure;
}
var points= [100,80, 60, 70, 50];
var number = points.length;
console.log(judgement(points));
