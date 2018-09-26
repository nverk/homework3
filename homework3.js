     // 1. A function that takes at least three arguments and returns the result of some set of operations using those arguments
  const a = function (a,b,c) {
    return (a+b+c)
  };
  console.log (a(10,2,9));
  
  //2. A function that takes no arguments and returns something
  const b = function () {
    return 'Coffee'
  };
    console.log (b()); 
  // 3. A function that takes arguments, does something but does not return anything
  const c = function (a,b,c) {
  	const doingsomething = a+b-c
    return 
  };
  console.log (c(1,2,3));
  // 4. A function that takes three strings and returns the string that is the longest
 const d = function(a,b,c) {
 let z 
 if((a.length > b.length) && (a.length > c.length)) {
     z = a 
 } else if((b.length > a.length) && (b.length > c.length)) {
     z = b 
 } else if ((c.length > a.length) && (c.length > b.length)) {
     z = c 
 }
 return z
};
console.log(d('apple','orange','pineapple'));    
    
  // 5. A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger 
  
    const e = function (a,b) {
   let toBeContinued
   if (a===b) {
     toBeContinued = 0
   } else if (a>b) {
     toBeContinued = 1
   } else if (a<b) {
     toBeContinued = -1
   };
    return toBeContinued
  };
  console.log (e(22,22));
  
  // 6. Create a multiply function (that multiplies the two given arguments together and returns the result)
  const f = function (a,b) {
    return a*b
  };
  console.log (f(22,11));
  
  // 7. Create a divide function (that divides the first argument by the second and returns the result)
  const g = function (a,b) {
    return (a/b)
  };
  console.log (g(88,2));
  
   // 8. Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / 
  //(HINT: Use the multiply and divide functions you already wrote)    

const triangleArea = function (base, height) {
  return g(f(base,height), 2) 
};
console.log(triangleArea(5,6));

  //9. Create a function called numLength that takes a number and returns the number of characters in the number
  // (example: numLength(8940); should return 4).  
  //Hint: strings have .length, numbers don't - so make a string and then get the length
const numLength = function(num) {
 const number =num + ''
 return number.length
};
console.log(numLength(56789));

 //10.Create a function that takes two strings and a number. 
//If the length of the two strings concatenated together is greater than the given number,
//return 1, else return -1
const h = function(str1,str2,number) {
 const number5 = number + ""
 const string= str1.length + str2.length
 let answer1 
 if((string) > (number5.length)) {
  answer1 = 1
 } else {
  answer1 = -1
 };
 return answer1
};
console.log(h('cheesecake','tiramisu', 5));
  
//11. Create a function runStuff that takes two numbers and a string.  
//If the string is 'rectangle', return the area of a rectangle using the two numbers as 
// base and height.  If the string is 'triangle', return the area of a triangle 
// (you can use the triangleArea function here).  
// If the string does not match 'rectangle' or 'triangle', return -1.


const runStuff = function (num1,num2,string) {
 let area
 if (string === 'rectangle') {
  area = num1*num2
 } else if (string === 'triangle') {
  area = triangleArea (num1,num2)
 } else {
  area = -1
 };
 return area
};
console.log (runStuff(2, 11,'triangle'));