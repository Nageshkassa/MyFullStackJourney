function arrUnshift(arr,value) {
    if (arr.length === 0) {
        arr[0]=value;
      return arr.length;
    }
   for (let i = arr.length-1; i >= 0; i--) {
        arr[i+1]=arr[i];
        
    }
    arr[0]=value; 
    return arr.length;
  }
  
  console.log(
    "\n-------*  Adds the value to the front of an array and returns the array's new length. *------\n"
  );
  
  var array = [ 4,5,6];
  console.log(" Original Array elements ", array,"length is ",array.length);
  var length = arrUnshift(array,3);
  console.log("New length is ",length);
  length  = arrUnshift(array,2);
  console.log("New length is",length);
  length  = arrUnshift(array,1);
  console.log("New length is", length,"arr=",array);

