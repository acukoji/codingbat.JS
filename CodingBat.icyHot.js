/*
Warmup-1 -- icyHot
Given two temperatures, return true if one is less than 0 and the other is greater than 100.

Examples

icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
*/

/*This is a problem caused me to review/clarify the difference between
multiple if statements and if/elseif/else constructions in coding
-https://stackoverflow.com/questions/9169249/why-we-use-if-else-if-instead-of-multiple-if-block-if-the-body-is-a-return-stat
-Essentially, multiple if statements will continue to execute. 
-If/else-if/else construction will short ciruit once the condition is met.
-This can have differing outcomes depending on whether the conditions set.
-Multiple if = seperate tests that execute sequentially--all ifs are run.
-If/else-if/else = One test that breaks out once condition is met.
-Another way of looking at it is that I/ie/e (or any that end in else)
will necessarily account for all possibilities.  
-In contrast, fringe cases can escape Multiple ifs, which will happen
if there is a gap between the limits (range) of the conditions.
-Others mention that i/ie/e are more robust to changes and easier to debug
*/

function icyHot(temp1, temp2){
    if(temp1<0){
      if(temp2>100){
        return true;
      }else{
        return false;
      }
    }else if(temp1>100){
      if(temp2<0){
        return true;
      }else{
        return false;
      }
 /*   Following code is unnecessary because it mirrors the two prev cases
    }else if(temp2<0){
      if(temp1>100){
        return true;
      }else{
        return false;
      }
    }else if(temp2>100){
      if(temp1<0){
        return true;
      }else{
        return false;
      }
*/
    }else((temp1>=0 && temp1<=100)||(temp2>=0 && temp2<=100)){
      return false;
    }
  }
