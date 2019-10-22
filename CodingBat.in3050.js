/*
Warmup-1 -- in3050
Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

Examples

in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true

*/

// attempt 1: Did not consider cases where a and b were in different ranges (30-40, 40-50)
function in3050(a, b){
    val absDiff = false;
    if(Math.abs(a-b)<=10){
      absDiff = true;
    }
    return absDiff;
  }

// solution 1: There might be a more concise method

function in3050(a, b){
    var absDiff = false;
   if((a>=30) && (a<=40)){
     if((b>=30) && (b<=40)){
       if(Math.abs(a-b)<=10){
        absDiff = true;
       }
     }
   }
   if((a>=40) && (a<=50)){
     if((b>=40) && (b<=50)){
       if(Math.abs(a-b)<=10){
        absDiff = true;
       }
     }
   }
    return absDiff;
  }

  // solution 2: Pretty much same, but collapsed the two if statements regarding range.

  function in3050(a, b){
    var absDiff = false;
   if(((a>=30) && (a<=40)) && ((b>=30) && (b<=40))){
      if(Math.abs(a-b)<=10){
        absDiff = true;
      }
   }
   if(((a>=40) && (a<=50)) && ((b>=40) && (b<=50)) ){
      if(Math.abs(a-b)<=10){
        absDiff = true;
      }
   }
    return absDiff;
  }