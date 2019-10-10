
//first attempt:  
function startOz(str) {
    if (str.length >= 2) {                  //this line turned out to be unnecessary.  
        if (str.charAt(0) == "o") {         //i thought it was necessary to avoid "out of bounds" error
            str = "o";                      //this turned out to be a problem, as detailed in attempt 8.  
            if (str.charAt(1) == "z") {
                str = "oz";
            }
        } else if{                          //also problem here. should be ( not {
            str.charAt(1) == "Z"){
            str = "z";
        }
        else {
            str = "";
        }
    }
}


//second attempt:  similar problems as in 1st attempt.  still didn't realize the problem with 
//returning the str--which kicks us out of nested-if before getting to the next indented if.
function startOz(str) {
    if (str.length >= 2) {
        if (str.charAt(0) == "o") {
            str = "o";
            if (str.charAt(1) == "z") {
                str = "oz";
            }
        } else if (str.charAt(1) == "Z") {
            str = "z";
        } else {
            str = "";
        }
        str = ""
    }
}
//third attempt: using .equals  Thought that maybe using ==  with strings was the issue (as i think
//it is in Java, if i remember it correctly).  But still, same issues of getting kicked out of the nest. 
function startOz(str) {
    if (str.length >= 2) {
        if (str.charAt(0).equals("o")) {
            str = "o";
            if (str.charAt(1).equals("z")) {
                str = "oz";
            }
        } else if (str.charAt(1).equals("Z") {
            str = "z";
        } else {
            str = "";
        }
        str = ""
    }
}
//fourth attempt: using 3 if statements and eliminating the if(str.length>=2) part. Still
// hadn't realized the issues raised above.  
function startOz(str) {

    if (str.charAt(0) == "o") {
        str = "o";
        if (str.charAt(1) == "z") {
            str = "oz";
        }
    }
    if ((str.charAt(0) != "o") && (str.charAt(1) == "Z")) {
        str = "z";
    }
    if ((str.charAt(0) != "o") && (str.charAt(1) != "Z")) {
        str = "";
    }
    return str;
}
//fifth attempt: using if else-if structure.  (also tried all separate if statements which didn't work)
function startOz(str) {

    if (str.charAt(0) == "o") {
        str = "o";
    }
    else if ((str.charAt(0) == "o") && (str.charAt(1) == "z")) {
        str = "oz";
    }
    else if ((str.charAt(0) != "o") && (str.charAt(1) == "Z")) {
        str = "z";
    }
    else ((str.charAt(0) != "o") && (str.charAt(1) != "Z")) {
        str = "";
    }
    return str;
}
//sixth attempt: increased the possible combinations for string length.
function startOz(str) {
    if (str.length >= 2){  
      if ((str.charAt(0)=="o")&&(str.charAt(1)!="z")) {
        str = "o";
      }
      else if ((str.charAt(0)=="o")&&(str.charAt(1)=="z")) {
        str = "oz";
      } 
      else if ((str.charAt(0)!="o")&&(str.charAt(1)=="Z")) {
        str = "z";
      } 
      else ((str.charAt(0)!="o")&&(str.charAt(1)!="Z")) {
        str = "";
      }
    }
      else if(str.length==2){
        if ((str.charAt(0)=="o")&&(str.charAt(1)!="z")) {
          str = "o";
        }
        else if ((str.charAt(0)=="o")&&(str.charAt(1)=="z")) {
          str = "oz";
        } 
        else if ((str.charAt(0)!="o")&&(str.charAt(1)=="Z")) {
          str = "z";
        } 
        else ((str.charAt(0)!="o")&&(str.charAt(1)!="Z")) {
          str = "";
        }
      }
      else{
        if(str.charAt(0)=="o"){
           str = "o"
           }
      } 
      
      return str;
    }

//seventh attempt: tried a smaller piece of code to try to find where the problem was.
//This ultimately led me to understand what the issue was all along.  
//This was a lesson in trying out smaller pieces of code to isolate the issues.
    function startOz(str) {
if (str.charAt(0)=="o"){
  str = "o";                    //this is the problem.  this line kicks us out of the nested-if
  if (str.charAt(1)=="z"){
    str = "oz";
  }
}
  return str;
}
//Eigth attempt successful: Once I realized that reassigning str kicks us out of the nested-if, i was 
//able to structure the proper logic.  I can't remember if Java allows us to redefine a var within an 
// if statement without kicking us out of the nest.  I thought only a return statement kicked us out. 

function startOz(str) {

    if (str.charAt(0)=="o"){                //when the first letter is "o"
      if (str.charAt(1)=="z"){                  //when "z" follows "o"
        str = "oz";
      }else{                                    //when "z" doesn't follow "o"
        str = "o";
      }
    }else{                                  //when the first letter **isn't** "o"
      if (str.charAt(1)=="z"){                  //when the second letter is "z"
        str = "z";
      }else{                                    //when the second letter **isn't** "z"
        str = "";
      }
    }
    return str;                             //the above code accounts for all possibiities.
                                            //all that's left is to retun the altered string.
  }

  //ninth attemtp: tried to do the solution over again.  made a mistake with curly braces
  //intersting that it completely broke everything when inputting to CodingBat.
  function startOz(str) {
    if (str.charAt(0)=="o"){
      if(str.charAt(1)=="z"){
        str = "oz";
      }else{
        str = "o";
    }else{
      if (str.charAt(1)=="z"){
        str = "z";
      }else{
        str = "";
      }
    } 
    return str;
  }