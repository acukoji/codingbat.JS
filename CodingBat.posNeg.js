/*
Warmup-1 -- posNeg
Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

Examples

posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
*/


function posNeg(a, b, negative){
    if(!negative){
      if((a<=(-1) && b>=(1)) || b<=(-1) && a>=(1)){
         return true;
      }else{
        return false;
      }
    }
    if(negative){
      if((a<=(-1) && b<=(-1)){
         return true;
         }else{
        return false;
        }
    }
 }

 /* why won't this one work?
 function posNeg(a, b, negative){
   if((a<=-1 && b>=1)||(b<=-1 && a>=1)){
     if (!negative){
       return true;
     }else{
       return false;
     }
   if((a<=-1 && b<=-1)){
     if(negative){
       return true;
     if(!negative){
       return false;
     }
}
*/