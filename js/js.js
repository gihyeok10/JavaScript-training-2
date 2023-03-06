// const obj = {
//   1: "1입니다",
//   false: "거짓입니다",
// };
// const id = Symbol("id");

// const user = {
//   name: "mike",
//   age: 30,
//   [id]: "myid",
// };

// console.log(user);
// console.log(Object.keys(user));

// //전역 심볼

// const id1 = Symbol.for("id");
// const id2 = Symbol.for("id");

// console.log(id1 === id2);

// let userRate = 30.123221;

// console.log(Math.round(userRate * 100) / 100);
// console.log(userRate.toFixed(8)); // 투 픽스 => 스트링값 반환

// let x = Number("x");

// let margin = "10px";
// console.log(parseInt(margin));

// console.log("---------------------------------------------------------");

// console.log("문자열 메소드");

// //toYpperCase (모든 영문을 바꿔줌)
// //str.indexOf(text)
// //slice (n{시작점},m(끝점))

// let desc = "abcdefg";

// console.log(desc.slice(0, 2));
// console.log(desc.substr(2, 4));
// console.log("repeat반복:", desc.repeat(3));
// console.log("문자열 공백 제거 trim:", desc.trim());

// console.log("a".codePointAt(0)); //a의 값

// let list = [
//   "01. 들어가며",
//   "02. js의 역사",
//   "03. 자료형",
//   "04. 함수",
//   "05. 배열",
// ];

// let newList = [];

// for (let i = 0; i < list.length; i++) {
//   newList.push(list[i].slice(4));
// }

// console.log(newList);

// // 금칙어 : 콜라

// const hasCola = (str) => {
//   if (str.includes("콜라")) {
//     console.log("금칙어가 있습니다.");
//   } else {
//     console.log("통과");
//   }
// };
// hasCola("사이다가 짱이야");
// hasCola("콜라 짱이야");
// hasCola("콜라가 짱이야");

// //inclues

// console.log("--------------------------------------------------");

// let arr = [1, 2, 3, 4, 5, 6];

// arr.slice(0, 4);
// console.log(arr);

// let arr1 = [1, 2];
// arr1.concat([5, 6]);
// console.log(arr1);

// let arr3 = ["mike", "tom", "vakss"];

// arr3.forEach((nick, index) => {
//   console.log(`${index + 1}.${nick}`);
// });

// console.log(arr3.includes("mike"));

// const result = arr.find((item) => {
//   return item % 2 === 0;
// });

// console.log(result);

// let userList = [
//   { name: "mike", age: 30 },
//   { name: "jane", age: 5 },
//   { name: "tom", age: 10 },
// ];

// const userListResult = userList.find((user) => {
//   if (user.age < 19) {
//     return true;
//   } else {
//     return false;
//   }
// });
// //첫번째 트루만 반환하고 끝남 보통 filter 사용
// console.log(userListResult);

// const userListResult2 = userList.filter((user) => {
//   if (user.age < 19) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(userListResult2);

// const userListResult3 = userList.map((user, indx) => {
//   return Object.assign({}, user, {
//     id: indx + 1,
//     isAdult: user.age > 19,
//   });
// });

// console.log(userListResult3);

// let re = arr.join("-");
// console.log(re);
//  //배열 객체를 구분하기 위한  Array.isArray => true false 반환
