/*
Warmup-1 -- front22
Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.

Examples

front22('kitten') → kikittenki
front22('Ha') → HaHaHa
front22('abc') → ababcab
*/

function front22(str){
    var firstTwo = str.substring(0,2);
    return firstTwo+str+firstTwo;
  }
  