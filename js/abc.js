let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  basic for loop, for of

// map, filter, reduce and foreach

// map, filter => returns new array
let arr2 = arr.map((item) => item);

let evenArr = arr.filter((item) => item % 2 === 0);
console.log(evenArr);

let Sum = arr.reduce((sum, num) => sum + num, 0);

console.log(Sum);

let xyz = arr.forEach((element) => {
  console.log(element);
});

console.log(xyz);
