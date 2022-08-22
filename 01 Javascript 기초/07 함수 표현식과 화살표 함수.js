console.log(helloB()); // 함수 선언식의 경우 선언이 뒤에 있어도 위에서 실행은 가능하다.

let helloA = function () {
  return "안녕하세요 여러분";
}; // 함수 표현식, 표현식은 hoisting이 되지 않는다.

function helloB() {
  return "안녕하세요 여러분";
} // 함수 선언식, 선언식은 실행 시, 가장 윗부분에서 생성된 것으로 간주(hoisting)

const helloText = helloA(); // ƒ hello() {}
console.log(helloText); // 안녕하세요 여러분

let helloC = () => {
  return "안녕하세요 여러분";
}; // 함수 표현식
console.log(helloC());

let helloD = () => "안녕하세요 여러분"; // 함수 표현식
console.log(helloD());
