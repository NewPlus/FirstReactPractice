let a = 1; // = : 대입 연산자
let b = 2;
console.log(a + b); // 3 : +로 덧셈
console.log(a - b); // -1 : -로 뺄셈
console.log(a * b); // 2 : *로 곱셈
console.log(a / b); // 0.5 : /로 나눗셈
console.log(a % b); // 1 : %로 나머지 연산

let c = "1"; // = : 대입 연산자
let d = "2";
console.log(c + d); // 12 : +로 연결(concatenate) 연산, 둘 중 하나가 숫자형이어도 문자로 묵시적 형변환이 적용됨

let e = 1; // = : 대입 연산자
let f = "2";

e += 10; // += : 대입 덧셈 연산자, e = e + 10와 같은 연산
// -=, *=, /=, %= 도 e = e - 10, e = e * 10, e = e / 10, e = e % 10와 같음
console.log(e);

a++; // ++ : a = a + 1과 a += 1과 같은 연산
// -- 도 a = a - 1과 a -= 1과 같은 연산
// a++ : 후위 연산, ++a : 전위 연산
console.log(a);

console.log(!true); // ! : NOT 연산자
console.log(true && true); // && : AND 연산자
console.log(true || true); // || : OR 연산자

let compareA = 1 == "1"; // JavaScript에서는 True인데 이유는 이것을 값만 보고 비교하기 때문이다.
console.log(compareA); // == : 두 값이 같은지를 비교하여 True, False를 return
let compareB = 1 === "1";
console.log(compareB); // === : 두 값이 '타입'도 같은지를 비교하여 True, False를 return
let compareC = 1 != "1"; // JavaScript에서는 False인데 이유는 이것을 값만 보고 비교하기 때문이다.
console.log(compareC); // != : 두 값이 다른지를 비교하여 True, False를 return
let compareD = 1 !== "1";
console.log(compareD); // !== : 두 값이 '타입'도 다른지를 비교하여 True, False를 return
let compareE = 1 > 2; // >, <, >=, <=
console.log(compareE); // > : 두 값중 왼쪽이 크면 True, 아니면 False를 return
console.log(typeof compareE); // type 이름을 출력

let aa;
a = a ?? 10; // ?? 둘 중에 null, undefine이 아닌 것을 선택하는 연산자
console.log(a); // 10
