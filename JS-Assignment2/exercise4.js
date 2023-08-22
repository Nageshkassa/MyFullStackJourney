function arrLastIndexOf(arr, value) {
  var index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
    }
  }
  return index;
}

const array = [10, 12, 50, 12, 20];
//calling the arrLastIndexOf function
const index = arrLastIndexOf(array, 12);
console.log(
  "\n-------* Get the index of specified value ,if not found,return -1. If there is more than one occurrence, return the index of the last occurrence *------\n"
);
if (index != -1) {
  console.log("Found the index at ", index);
} else {
  console.log(index);
}
