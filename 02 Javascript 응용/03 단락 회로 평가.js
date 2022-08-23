console.log(false && true); // 앞이 false이므로 바로 평가 false로 종료
console.log(true || true); // 앞이 true이므로 바로 평가 true로 종료
console.log(!true);

const getName = (person) => {
  const name = person && person.name; // person이 false면 바로 출력 false
  return name || "객체가 아닙니다";
};

let person = { name: "이용환" }; // 이용환
person = null; // falsy한 값
const name = getName(person);
console.log(name);
