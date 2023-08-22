function arrShift(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    var firstelemet =arr[0]; 
    for (let i = 0; i < arr.length-1; i++) {
        arr[i]=arr[i+1];
        
    }
    arr.length--;
    //console.log(arr);
     return firstelemet;
  }
  
  console.log(
    "\n-------*  Remove the first element from an array and return that  element  *------\n"
  );
  var array = [1, 2, 3, 4];
  console.log(" Array elements ", array);
  var element = arrShift(array);
  console.log(" Deleted element is",element);
  element = arrShift(array);
  console.log(" Deleted element is", element);
  element = arrShift(array);
  console.log(" Deleted element is", element);
  element = arrShift(array);
  console.log(" Deleted element is", element);
  element =arrShift(array);
  console.log(" Deleted element is", element);