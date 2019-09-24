/* failed attempt due to 

function front3(str){
var front;
  if(str.length<3){
    front = str;
    return front;
  }
  if(str.length>=3){
    return front+front+front;
  }
}
*/

//correct solution:
function front3(str){
var front;
  if(str.length<3){
    front = str;
    return front+front+front;
  }
  if(str.length>=3){
    front = str.substring(0,3):
    return front+front+front
  }
}