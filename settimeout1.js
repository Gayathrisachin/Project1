"use strict";

// for (var i = 0; i < 5; i++) {
//    for (var j=0;j<=i;j++) {
//         setTimeout(function () {
//             console.log(j);
//         }, 1000);
//     }
// }
//Arrow function vs Normal function
// function Car() {
//     this.speed = 0;
//     this.speedUp = function (speed) {
//         this.speed = speed;
//         setTimeout(function () {
//             console.log(this.speed); // undefined
//         }, 1000);
//     };
// }
// var car = new Car();
// car.speedUp(50);
// function Car() {
//     this.speed = 0;
//     this.speedUp = function (speed) {
//         this.speed = speed;
//         // var self = this;
//         setTimeout(function () {
//             console.log(self.speed);
//         }, 1000);
//     };
// }
// var car = new Car();
// car.speedUp(50); // 50;
//Arrow function
// function Car() {
//     this.speed = 0;
//     this.speedUp = function (speed) {
//         this.speed = speed;
//         setTimeout(
//             () => console.log(this.speed),
//             1000);
//     };
// }
// var car = new Car();
// car.speedUp(50); // 50;
//For...of loop iterating over an array
// let scores = [80, 90, 70];
// for (let score of scores) {
//     score = score + 5;
//     console.log(score);
// }
//using const instead of let
// let scores = [80, 90, 70];
//  for (const score of scores) {
//     // score = score + 5;
//      console.log(score);
// }
// [a, b] = [10, 20];
// console.log(a);
// // expected output: 10
// console.log(b);
// // expected output: 20
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);
// // expected output: [30,40,50]
// //Array destructuring Progran
// var foo = ['one', 'two', 'three'];
// var [one, two, three] = foo;
// console.log(one); 
// console.log(two); 
// console.log(three); 
// //here reassigning the value of a and b
// var {a = 10, b = 5} = {a: 20,b: 25};
// console.log(a); // 3
// console.log(b); // 5 
//Nested object and array destructuring//
var people = [{
  name: 'Mike Smith',
  family: {
    mother: 'Jane Smith',
    father: 'Harry Smith',
    sister: 'Samantha Smith'
  },
  age: 35
}, {
  name: 'Tom Jones',
  family: {
    mother: 'Norah Jones',
    father: 'Richard Jones',
    brother: 'Howard Jones'
  },
  age: 25
}];

for (var _i = 0; _i < people.length; _i++) {
  var _people$_i = people[_i],
      n = _people$_i.name,
      _people$_i$family = _people$_i.family,
      f = _people$_i$family.father,
      m = _people$_i$family.mother;
  console.log('Name: ' + n + ', Father: ' + f + n + ', mother: ' + m);
} // "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
