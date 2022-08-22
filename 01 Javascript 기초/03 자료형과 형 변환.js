// Primitive Type(원시 타입)만 다룸
let age = 25; //정수
let tall = 175.9; // 실수
// javascript에서는 둘다 같은 숫자형으로 취급
let inf = Infinity; // 양의 무한대
let minus_inf = -Infinity; // 음의 무한대
let nan = NaN; // 수학적 연산의 실패한 값

console.log(age + tall); // 200.9
console.log(age * tall); // 4397.5

let name = "NewPlus"; // 문자열
let name2 = "이용환";
let name3 = `NewPlus ${name2}`; // Template Literal : $표시로 변수를 문자열에 포함시킬 수 있음
console.log(name3);

let isSwitchOff = true; // bool 형
let a = null; // null 값
console.log(a);

let variable; // undefined 값 : 초기화를 안한 그냥 변수의 경우 표시되는 값
console.log(variable);

let numberA = 12; // 숫자
let numberB = "2"; // 문자열
console.log(numberA * numberB); // 24 : 적절하게 형을 변환함(casting : 여기서는 문자열을 숫자로) -> 묵시적 형변환
console.log(numberA + numberB); // 122 : 적절하게 형을 변환함(casting : 여기서는 숫자를 문자열로) -> 묵시적 형변환

console.log(numberA + parseInt(numberB)); // 14 : 문자열을 숫자로 변환(parseInt) -> 명시적 형변환
