// if b == "close" 
//and c== "far"

//or

// if c == "close"
//and b== "far"

//then true

// close = differing by at most 1: <= abs (1)
// far = differing from a and b by at least 2: >= abs (2)


// looking at b, close = compared to a, |b-a|<=1.  
// in this case a must be closer than 1 abs value away from b.

// if |c-b|>=2 & |c-a|>=2 , then it is "far"

// looking at b:  if b is close and c is far, return true
// or 
// looking at c: if c is close and b is far, return true

// closeFar(1, 2, 10) → true
// closeFar(1, 2, 3) → false
// closeFar(4, 1, 3) → true

function closeFar(a, b, c) {
    if (Math.abs(b - a) <= 1) {
        if (Math.abs(c - b) >= 2 && (Math.abs(c - a) >= 2)) {
            return true;
        } else {
            return false;
        }
    }
    
    if (Math.abs(c - a) <= 1) {
        if (Math.abs(b - c) >= 2 && (Math.abs(b - a) >= 2)) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}

console.log(closeFar(10, 8, 9));
console.log(closeFar(1, 2, 3));
console.log(closeFar(4, 1, 3));

console.log(closeFar(1, 2, 10));
console.log(closeFar(1, 2, 3));
console.log(closeFar(4, 1, 3));





