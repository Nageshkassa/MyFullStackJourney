// function Greet() {
//     console.log("Welcome to GFG!");
// };
// // Execution of Regular Function.
// Greet();

// // IIFE creation and execution.
// (function(a) {
//     console.log("Welcome to IIFE a="+a);

// })(3);

const array1 = ["Nagesh", "Ram", "Jay"];
const array2 = ["Not", "Raj"];
const res = (function arrConcat(arr1, arr2) {
  var combinedArray = [];
  //copying arr1 elements to combinedArray
  for (let i = 0; i < arr1.length; i++) {
    combinedArray.push(arr1[i]);
  }

  //copying arr2 elements to combinedArray
  for (let i = 0; i < arr2.length; i++) {
    combinedArray.push(arr2[i]);
  }
  return combinedArray;
})(array1, array2);
console.log(
  "\n-------* Concatenate two arrays and return the combined array  *------\n"
);

console.log("Using IIFE function ,Combined array is  ", res);

function arrConcat(arr1, arr2) {
  var combinedArray = [];
  //copying arr1 elements to combinedArray
  for (let i = 0; i < arr1.length; i++) {
    combinedArray.push(arr1[i]);
  }

  //copying arr2 elements to combinedArray
  for (let i = 0; i < arr2.length; i++) {
    combinedArray.push(arr2[i]);
  }
  return combinedArray;
}
const res2 = arrConcat(array1, array2);

console.log("Using normal function ,Combined array is  ", res2);
