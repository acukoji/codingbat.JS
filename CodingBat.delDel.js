/*
Warmup-1 -- delDel
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

Examples

delDel('adelbc') → abc
delDel('adelHello') → aHello
delDel('abcdel') → abcdel
*/

function delDel(str){
    if(str.includes("del")){
      if(str.search("del")==1){
        str = str.replace("del", "");
      }else{
        str = str;
      }
    }else{
        str = str;
    } 
   return str;
  }