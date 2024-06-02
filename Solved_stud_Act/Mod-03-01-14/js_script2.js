//Module 03-->01-->14-->Stu_Arrays

// WRITE YOUR CODE HERE
const STUDENT_NAME = ["Daniel", "Rylan", "David A.", "David B."];

console.log("Hello every one!");

const STAD = ("Dude");
//STUDENT_NAME[0];
console.log(STAD);

for (let x = 0; x < STUDENT_NAME.length; x++) {
    console.log(`Welcome to the class, ${STUDENT_NAME[x]}!`);
    // or x = x + 1 or x += 1
}
    
//or could use the backtick
console.log(`The length of the array is ${STUDENT_NAME.length}`);

STUDENT_NAME[0] = "Dude";
console.log(`Welcome to the class, ${STUDENT_NAME[0]}!`);

if (STAD != STUDENT_NAME[0]) {
    console.log(STAD != STUDENT_NAME[0])
    console.log(`The wonderful ${STUDENT_NAME[0]} is now in our class`);
}
else {
  console.log("wrong");
}


