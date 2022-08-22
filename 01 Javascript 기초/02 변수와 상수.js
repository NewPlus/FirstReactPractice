let age = 25;
// ^age, ag+e 같은 기호는 이름으로 불가
// 단 _(underbar)와 $는 가능
// 숫자는 제일 처음만 불가능
// 예약어(if, for 등등)는 불가능
// var와 let 둘다 비슷
// 그러나 let이 데이터 타입에 더욱 엄격하여
// let이 var보다 좀 더 디버깅할 확률이 적다!
console.log(age); // 25

age = 30;
console.log(age); // 30

var age_var = 25;
console.log(age_var); // 25

age_var = 30;
console.log(age_var); // 30

const age_con = 25; // 상수
// 초기화가 무조건 되어야함
// 선언 이후 초기화가 불가능 하므로
console.log(age_con); // 25