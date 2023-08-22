function arrPop(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  var lastindex = arr.length - 1;
  var lastelement = arr[lastindex];
  arr.length = lastindex;
   return lastelement;
}
console.log(
  "\n-------* Remove the last element from an array and return that element. *------\n"
);

var array =array = [1, 2, 3, 4];
console.log(" Array elements ", array);
var element = arrPop(array);
console.log(" Deleted element is",element);
element = arrPop(array);
console.log(" Deleted element is", element);
element = arrPop(array);
console.log(" Deleted element is", element);
element = arrPop(array);
console.log(" Deleted element is", element);
element = arrPop(array);
console.log(" Deleted element is", element);