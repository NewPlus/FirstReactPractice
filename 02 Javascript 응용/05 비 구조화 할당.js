let arr = ["one", "two", "three"];

let [one, two, three, four = "four"] = arr; // 배열의 기본 변수 비 구조화 할당
console.log(one, two, three, four);

let [one2, two2, three2] = ["one", "two", "three"]; // 배열의 선언 분리 비 구조화 할당
console.log(one2, two2, three2);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

let object = { one3: "one", two3: "two", three3: "three" };
let { one3: one4, two3, three3, abc = "four" } = object;
console.log(one4, two3, three3, abc);
