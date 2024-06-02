const outer = document.querySelector('.outer-div');
const inner = document.querySelector('.inner-div');
const button = document.querySelector('.button');

function changeBlue(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute('style', 'background-color: blue');
}

function changePurple(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute('style', 'background-color: #601A4A');
}

function changeOrange(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    'style',
    'background-color: #EE442F; color: white;'
  );
}

outer.addEventListener('click', changePurple);
inner.addEventListener('click', changeOrange);
button.addEventListener('click', changeBlue);

// const firstName = 'John';
// const age = 30;

// console.log("My name is " + firstName + " and I am " + age);

// console.log(`My name is ${firstName} and I am ${age}`);


// console.log(s.length());
// console.log(s.length);

// const s = 'Hello world!';

// console.log(s.toUpperCase());
// console.log(s.substring(0, 5));

// console.log(s.substring(0, 5).toUpperCase());

// const s = 'technology, computers, it, code';

// console.log(s.split(''));

// console.log(s.split(', '));

// const fruit = new Array(1,2,3,4,5); 

// console.log(fruit);

// const fruits = ['apples', 'oranges', 'pears'];
	
// console.log(fruits);
// console.log(fruits[1]);

// fruits[3] = 'grapes';
// console.log(fruits[3]);
// console.log(fruits);

// fruits.push('mangos');
// console.log(fruits);

// fruits.unshift('strawberries');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('oranges'));

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30, 
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 main st.', 
//     city: 'houston',
//     state: 'TX'
//   }
// }

// person.email = 'johndoe@gmail.com'
// console.log(person.firstName);
// console.log(person.firstName, person.lastName);
// console.log(person);

// console.log(person.hobbies[1]);
// console.log(person.address.city);


// const { firstName, lastName } = person;
// console.log(firstName); 
// console.log(lastName);

// const { firstName, lastName, address: { city }} = person;
// console.log(city);

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  }
];

//Array of objects
//console.log(todos[1].text);

// forEach, map, filter

// todos.map(function(todo) {
//   console.log(todo.text);
// });

// const testMe = [1,4,7];


//init var to 0

// function myTotal(testMe) {
//   sumOf = 0;
//   for (let i = 0; i < testMe.length; i++);
//   {
//     sumOf += testMe[i];
//   }
//   console.log(sumOf / testMe.length)
//   return sumOf / testMe.length;
// }

for(let i= 0; i < 10; i++) {
  console.log(`While Number: ${(i)}`);
}

let i = 0;
while(i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}


