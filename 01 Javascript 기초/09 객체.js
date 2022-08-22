let person1 = new Object(); // 생성자 방식
let person2 = {}; // 객체 리터럴 방식

let person3 = {
  key: "value", // property(객체 프로퍼티)
  key1: "value2", // 왼쪽이 키(문자열, 중복 안되게 하는게 좋다), 오른쪽이 벨류(다양한 값 가능)
  key2: true,
  key3: [1, 2],
  key4: undefined,
  key5: function () {
    console.log(`안녕 지금 여기 key값은 ${this.key}`); // this["key"]와 같음
  }
}; // const person3라고 할지라도 에러는 안남 -> 객체 자체를 수정하는 행위가 아니므로 -> 새로운 객체를 대입연산자를 통해 초기화하는 경우

console.log(person3);
console.log(person3.key1); // 점 표기법 : 객체이름.키이름 -> 없는 벨류는 undefined이 나옴
console.log(person3["key"]); // 괄호 접근법 : 객체이름["키(문자열)"] -> 변수로 가져올 경우 매우 편리함

function getPropertyValue(key) {
  return person3[key];
}

console.log(getPropertyValue("key")); // 괄호표기법을 활용해 가져올 수 있다!

person3.location = "한국"; // location: "한국" 을 추가
person3["gender"] = "남성"; // gender: "남성" 을 추가

person3.key = "이용환"; // 수정 가능
person3["key1"] = "keys"; // 수정 가능

console.log(person3);

person3.key4 = null; // 프로퍼티 삭제 -> 메모리 단위로도 삭제 -> 추천
delete person3["key4"]; // 프로퍼티 삭제 -> 메모리는 남음 -> 비추

console.log(person3);

person3.key5(); // person3["key5"]();와 같다.

console.log(person3.k); // 존재하지 않는 프로퍼티 접근
console.log(`key : ${"key" in person3}`); // 프로퍼티 존재 여부 확인
console.log(`key2 : ${"key2" in person3}`);
console.log(`k : ${"k" in person3}`);
