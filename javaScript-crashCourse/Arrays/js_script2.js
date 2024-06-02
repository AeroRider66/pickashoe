
// ARRAY Methods

// <!-- From YouTube video "JavaScript Crash Course for Beginners" -->

// WRITE YOUR CODE HERE (here's a set of objects that will be used for the examples.)
const todos = [
  {
    id: 1,
    text: 'Take out trash.',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meet with boss.',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];

console.log(todos)

//For / Of Loop - the 'todo' after the let can be any variable name.  This loop cycles through all the entries of the array objects sequentially.
// for(let todo of todos) {
//   console.log(todo.text);
//   console.log(todo.id);

// }

//-----------------------------------------------
// forEach - 
//this will iterate through the array and retrieve the property we define (todo.text - the text property in this case) from each object in the array and produces the value of that property.

// todos.forEach(function(todo)  {
//   console.log(todo.text)
// });



//----------------------------------------
//map - 
// Returns an array. We're defining an array variable (todoText) which will return whatever property from the object that we ask for, but will take them in as an array (unlike forEach which returns individual values). 
//This example will return an array that consists of only the "test" properties from the 'todos' array of objects.

// const todoText = todos.map(function(todo)  {
//   return todo.text
// });

// console.log(todoText);



//---------------------------------------------
//filter
//This allows us to filter out (or only include, whichever way you look at it) objects that do not meet a property value that you choose.
//It will return an array of objects (with all their properties) where the criteria are met.

// const todoCompleted = todos.filter(function(todo)  {
//   return todo.isCompleted === true;
// });
// console.log(todoCompleted);


// -----------------------------------------------------
// Combinations
//this takes it one step further and uses the map method AFTER the filter.  So the filter method is applied here, looking for an array of objects (with their properties) that have isCompleted as true.

// const todoCompleted = todos.filter(function(todo)  {
//   return todo.isCompleted === true;
//at this point todoCompleted arry would contain ALL the properties of the 2 objects that are true (ID 1 and ID 2). The 3rd object is false, and so it is filtered out of the returning array.

//-----------------------------------------------
//now add MAP into the code:
// }).map(function(todo) {
//   return todo.text;
// });
// Adding this 'map' (notice the '.' just before the "map") code at this point, only has the todoCompleted array to work with, so we have the 2 object array with all of each objects properties.  Now applying 'map' and asking for a return of 'todo.text' Will that the 'filter'ed array to extract the 'text' property.  This results in the final value being an array with just the 2 text lines from object 1 and 2 () for l)

// console.log(todoCompleted);