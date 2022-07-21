// Lecture 1 - Theory - Written in Notes
// --------------------------------------------//

// Lecture 2
/*var n=2;
function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);*/
// --------------------------------------------//

// Lecture 3
/*getName();
getName2();
console.log(x);
console.log(getName2);
var x=7;

function getName() {
    console.log("Namaste JS", x);
}

var getName2 = function(){
    console.log("Namaste JS 2", x);
}*/
// --------------------------------------------//

// Lecture 4

// var x=1;
// a();
// b();
// console.log(x);

// function a() {
//     x = 20;
//     let x= 10;
//     console.log(x);
// }

// function b() {
//     x = 110;
//     var x= 100;
//     console.log(x);
// }

// Lecture 5

// console.log(window === this) // true
// var a = 10;
// console.log(window.a, this.a, a); // 10 10 10

// Lecture 6

// console.log(a) // undefined
// var a = 10;
// console.log(x) // not defined , reference error

// Lecture 7

// var z = 10;
// function a() {
//     console.log(z);
//     var b=10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();
// console.log(b);


// Lecture 8

// console.log(a); // undefined
// //console.log(b); // Reference error b not initialized. undefined but in temporal deadzone. 
// // console.log(c); // Reference error c is not defined
// var a = 10;
// let b;
// console.log(b); // Now available because b is initialized as 1. but still in Script. not part of global context.
// b = 1;
// console.log(b);

// let a;
// const b;
// a = 5;
// b = 10;
// console.log(a);
// console.log(b);

// Lecture 9
// console.log(a) //undefined
// {
//     console.log(b) // reference error b is let access before define
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a,b,c) // 10,20,30
// }

// console.log(a,b,c) // b is not defined reference error

// let a = 10;
// {
//     let a = 100;
//     console.log(a); // 100 , shadowing
// }

// let b = 10;
// function test() {
//     var b = 100;
   
//     console.log(b);
// }
// test();
// console.log(b);
const a = 10;
{
   const a = 100;
   {
       const a = 200;
       console.log(a); // 200
   }
   console.log(a); // 100
}
console.log(a); // 10


