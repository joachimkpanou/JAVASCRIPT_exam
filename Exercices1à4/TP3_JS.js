function get_sum(points){
  var sum = 0;
  for(var i=0; i<points.length; i++)
    sum += points[i];
return sum;
  }

console.log(get_sum([100,80,60,70,80]));
  
