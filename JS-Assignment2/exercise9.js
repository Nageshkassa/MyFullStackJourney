function inSertionSort(arr) {
  let flag;
  for (let i = 1; i < arr.length; i++) {
    flag = false;
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      --j;
      flag = true;
    }
    arr[j + 1] = key;
    if (flag == 0) {
      break;
    }
  }
  return arr;
}
console.log(" Sort the elements of an array in place and return the array. ");
var array = [6, 5, 4, 3, 2, 1];
console.log("Before sorting the array  ", array);
var sortedArray = inSertionSort(array);
console.log("After sorting the array ", sortedArray);
