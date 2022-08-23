let a = 3;
a >= 0 ? console.log("양수") : console.log("음수");
// if( a>=0){
//   console.log("양수");
// } else{
//   console.log("음수");
// }

let b = [1, 23];
b.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");
// if(b.length === 0){
//   console.log("빈 배열");
// }else{
//   console.log("안 빈 배열");
// }

const arrayStatus = b.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

let c;

const result = c ? true : false;
console.log(result);

let score = 100;
// score >= 90
//   ? console.log("A+")
//   : score >= 50
//   ? console.log("B+")
//   : console.log("F");

if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}
