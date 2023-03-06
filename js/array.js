//배열 메소드

let arr = [27, 8, 5, 13];
//값을 받을수 있는 함수를 넣어줘야함
function fn(a, b) {
  console.log(a, b);
  return a - b;
}
arr.sort(fn);
console.log(arr);

// let result = 0;

// arr.forEach((num) => {
//   result += num;
// });

// console.log(result);
//=> reduce로 가능

const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0); //0자리는 초기값 100이면 100부터 시작.

console.log(result);

console.log("--------------------------------------------");

let userList = [
  { name: "mike", age: 30 },
  { name: "jane", age: 10 },
  { name: "sue", age: 27 },
  { name: "harry", age: 26 },
  { name: "top", age: 42 },
  { name: "gd", age: 60 },
];

let result2 = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }

  return prev;
}, []);

console.log(result2);

console.log("=============================================");
//구조분해 할당

let us = { name: "mkee", age: 12 };
let { name: userName, age: userAge } = us;
console.log("use:", userName);
