let arr1 = new Array();
let arr2 = [1, "2", true, null, undefined, {}, [], function () {}]; // 배열 리터럴
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5];
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);
console.log(arr3[3]);
console.log(arr3[4]);

arr3.push(6);
console.log(arr3);

arr3.push({ key: "value" });
console.log(arr3);

arr3.push("7");
console.log(arr3.length);
