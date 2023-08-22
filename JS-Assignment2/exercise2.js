function arrIndexOf(arr,value){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===value){
            return i;
        }
        
    }
    return -1;
}
console.log("\n-------* Get the index of the first occurrence specified value if not found, return -1 *------\n");
const array=[10,12,50,12,20];
const index=arrIndexOf(array,20);
if(index!=-1){
    console.log("Found the index at ",index);
}
else{
    console.log(index);
}


