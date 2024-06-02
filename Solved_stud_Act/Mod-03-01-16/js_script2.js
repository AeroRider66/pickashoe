// <!-- Module 03, 01, 16_Stu_Functions -->

// WRITE YOUR CODE HERE

// function Declaration
function isEqual(x, y) {
  if (x===y) {
    console.log("They are equal in type and value.");
    return;
  }
  else if (x==y) {
    console.log("They are equal in value.");
    return;
  }
  else {
    console.log("They are not equal.")
  }
  }
isEqual("2","2");


// function expression
let a = 3;
let b = 3;
const exRated = function() {
  if (a===b) {
    console.log("AB They are equal in type and value.");
  return;
  }

}