function arrPush(arr,value){
  var lastindex=arr.length;
    arr[lastindex++]=value;
    return lastindex;
   
}
console.log("\n-------*Add the value to the end of the array and return the length of the array*------\n");

var array=[1,2,3];
var length=arrPush(array,12);
console.log("Array is ",array, " and length of the array is "+length);
length=arrPush(array,13);
console.log("Array is ",array, " and length of the array is "+length);
length=arrPush(array,15);
console.log("Array is ",array,"Length of the array is ",length);



