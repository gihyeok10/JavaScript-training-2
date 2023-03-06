
const obj = {
    1:"1입니다",
    false : "거짓입니다"
}
const id = Symbol('id')

const user = {
    name:"mike",
    age :30,
    [id]: 'myid' 
}

console.log(user)
console.log(Object.keys(user))


//전역 심볼

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

console.log(id1 === id2)

let userRate = 30.123221;

console.log(Math.round(userRate *100)/100)
console.log(userRate.toFixed(8)) // 투 픽스 => 스트링값 반환

let x = Number('x');

let margin ='10px';
console.log(parseInt(margin))