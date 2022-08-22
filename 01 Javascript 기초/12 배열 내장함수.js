const arr = [1, 2, 3, 4];
const newArr = [];

arr.forEach((elm) => console.log(elm)); // 아래 코드와 같다. elm이 각 배열의 값
arr.forEach(function (elm) {
  newArr.push(elm * 2);
});
console.log(newArr);

const arr2 = arr.map((elm) => {
  return elm * 2;
}); // map은 새로운 배열 반환

console.log(arr2);

let number = 3;

arr.forEach((elm) => {
  if (elm === number) {
    console.log(true);
  }
});

console.log(arr.includes(number)); // 포함 여부 확인 내장 함수
console.log(arr.indexOf(number)); // -1은 없음을 나타냄, 있으면 인덱스 반환

const arr3 = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "green" }
];

console.log(arr3.findIndex((elm) => elm.color === "red")); // 해당 콜백 함수가 true를 반환하는 값에 해당하는 것을 찾아 인덱스 반환
console.log(
  // 해당 콜백 함수가 true를 반환하는 값에 해당하는 것을 찾아 인덱스 반환
  arr3.findIndex((elm) => {
    return elm.color === "red";
  })
);
// 중복되는 값이 있으면 제일 먼저있는 값을 반환

const element = arr3.find((elm) => {
  return elm.color === "blue";
});

console.log(element);

const arr4 = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" }
];

const arr5 = [{ num: 4, color: "green" }];

console.log(arr4.filter((elm) => elm.color === "blue")); //blue가 있는 것까지 자르기
console.log(arr4.slice(0, 2)); //0부터 2이전까지 자르기
console.log(arr4.concat(arr5)); // arr4와 arr5를 붙임

let chars = ["나", "다", "가"];
chars.sort(); // 정렬(문자열 기준이므로 사전순 정렬임)
console.log(chars);

let numbers = [0, 1, 3, 2, 10, 30, 20];
const compare = (a, b) => {
  //1. 같다
  //2. 크다
  //3. 작다
  // a와 b를 파라미터로 받고 적절한 값 반환

  if (a > b) {
    // 크다
    return 1;
  }

  if (a < b) {
    // 작다
    return -1;
  }

  // 같다
  return 0;
};
numbers.sort(compare); // 정렬(숫자 기준)
console.log(numbers);

const arr6 = ["이용환", "님", "안녕하세요", "또 오셨네요"];

console.log(arr6.join(" ")); // join안에 넣는 것은 구분자, default는 ,