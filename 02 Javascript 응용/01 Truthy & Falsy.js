let a = "string";
// [], {}, infinity, 숫자, 문자열 등 Truthy
// null, undefined, 0, -0, Nan, "" : Falsy

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

const getName = (person) => {
  if (!person) {
    // false NOT => True
    return "객체가 아닙니다";
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);
