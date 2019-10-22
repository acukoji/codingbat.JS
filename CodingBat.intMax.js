function intMax(a, b, c){
    var largest;
    if (a>b && a>c){
      largest = a;
    }
    else if (b>a && b>c){
      largest = b;
    }
    else{
      largest = c;
    }
    return largest;
    
  }
  