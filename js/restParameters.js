//나머지 매개변수 , 전개 구문

function showName(...numbers) {
  let result = 0;
  numbers.map((num) => {
    result += num;
  });
  console.log(result);
}

showName(1, 2, 3, 4);

console.log("-----------------------------------");

function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}
//나머지 매개변수는 항상 마지막에 위치해야 한다.
const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("tom", 20, "html", "js");

console.log(user1);
console.log(user2);

console.log("----------------------전개구문");

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

arr = [...arr2, ...arr];
console.log(arr);

let user = { name: "mike" };
let info = { age: 30 };
let fe = ["js", "react"];
let lang = ["korean", "english"];

user = { ...user, ...info, skils: [...fe, ...lang] };
console.log(user);
console.log("========closure=======");

function makeCounter() {
  let num = 0;

  return function () {
    return num++;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

console.log("=======setTimeout========");

// function fn(...name) {
//   console.log([name]);
// }

// setTimeout(fn, 3000, "르브론", "레너드");

// function showName(...name) {
//   console.log(name);
// }

// setInterval(showName, 1000, "르브론", "갈통이");
// let num = 0;
// function showTime() {
//   console.log(`안녕하세요 접속하신지 ${1 + num++}초가 지났습니다!!`);
//   if (num > 5) {
//     clearInterval(tId);
//   }
// }

// const tId = setInterval(showTime, 1000);

console.log("=========================");

//call 메서드

const mike = { name: "mike" };

const tom = { name: "톰" };

function showThisName() {
  console.log(this.name);
}
showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.apply(mike, [1999, "singer"]); //배열로 반환
update.call(tom, 1999, "농구선수");

console.log(mike);
console.log(tom);

const updateMike = update.bind(mike);

updateMike(1996, "police");
console.log("변경된 마이크:", mike);

console.log("================상속================");

const car = {
  wheels: 4,
  dirve() {
    console.log("drive....");
  },
};

const bmw = {
  color: "red",
  navigator: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;
//상속해서 쓸수 있슴
console.log(bmw.wheels);

const x5 = {
  color: "white",
  name: "x5",
};
x5.__proto__ = bmw;

console.log(x5.color);
console.log(x5.navigator);

const mm = function (color) {
  this.color = color;
};
mm.prototype.wheels = 8;

const x6 = new mm("red");
console.log(x6.wheels);
//이렇게도 사용 가능. 생성자 함수를 만듬

async function getName() {
  return "mike";
}

getName().then((name) => {
  console.log(name);
});

async function showName2() {
  const result = await getName("마으크");
  console.log(result);
}
console.log("시작");
showName2();
