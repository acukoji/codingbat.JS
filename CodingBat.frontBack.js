/*
Warmup-1 -- frontBack
Given a string, return a new string where the first and last chars have been exchanged.

Examples

frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → ba
*/

//note: substr()  uses beginning index and ending index, 
//or just one parameter means just that index value (even for -1).
//but slice() uses beginning index and (end-1)

function frontBack(str){
    var lastLetter = str.substr(-1);
    var firstLetter = str.substr(0, 1);
    if(str.length <= 1){
      return str;
    }
    if(str.length == 2){
      return lastLetter+firstLetter;
    }
    if(str.length >= 3){
      str = lastLetter + str.slice(1,-1)
                      + firstLetter);
      return str;
    }
  }


  /* not sure why this didn't work
  has to do with concat not working the same for strings?
  function frontBack(str){
  var firstLetter = str.substr(-1);
  var lastLetter = str.substr(0, 1);
  if(str.length <= 1){
    return str;
  }
  if(str.length == 2){
    return str.concat(firstLetter,lastLetter);
  }
  if(str.length >= 3){
    str = firstLetter + str.slice(1,-1)
                    + lastLetter);
    return str;
  }
}
*/

/* i don't totally get the output for this failed effort either
function frontBack(str){
  var firstLetter = str.substr(-1, -1);
  var lastLetter = str.substr(0);
  if(str.length <= 1){
    return str;
  }
  if(str.length == 2){
    return str.concat(firstLetter,lastLetter);
  }
  if(str.length >= 3){
    str = firstLetter + str.slice(1,-1)
                    + lastLetter);
    return str;
  }
}
