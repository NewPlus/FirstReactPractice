const arr = ["a", "b", "c"];

for (let i = 1; i <= 100; i++) {
  // 반복 수행할 명령
  console.log("이용환");
} // 100번 출력

for (let i = 0; i < arr.length; i++) {
  // 반복 수행할 명령
  console.log(arr[i]);
}

let person = {
  name: "이용환",
  age: 24,
  tall: 187
};

const personKeys = Object.keys(person);
const personValues = Object.values(person);

for (let i = 0; i < personKeys.length; i++) {
  // 반복 수행할 명령
  console.log(personKeys[i]);
  const curKey = personKeys[i];
  const curValue = person[curKey];
  console.log(`${curKey} : ${curValue}`);
}

for (let i = 0; i < personValues.length; i++) {
  // 반복 수행할 명령
  console.log(personValues[i]);
}