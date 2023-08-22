function arrJoin(arr){
    var str=""
    for (let i = 0; i < arr.length; i++) {
        str+=arr[i];
      
        
    }
    // console.log(typeof str);
    return str;

}

console.log("\n-------* Join all the elements into a string and return that string *------\n");
//by using the numbers 
const array=[3,5,0];
console.log(arrJoin(array));

//by  using strings
const myArray = ['oh', ', ','that ', 'is ','good','!'];
const joinedString = arrJoin(myArray);


console.log(joinedString);  

