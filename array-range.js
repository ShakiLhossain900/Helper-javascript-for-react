const rangeArray =(arr) => {
let sum = 0;
let result = 0;
if(arr[1] < arr[0]) {
   for(let j = arr[0]; j >= arr[1]; j--){
       result += j;
   }
   return result;
}
else if(arr[0] < arr[1]){
    for(let i = arr[0]; i <= arr[1]; i++){
        sum += i;
    }
    return sum;
 }
}

console.log(rangeArray([1, 4]));
console.log(rangeArray([4, 1]));
console.log(rangeArray([10, 4]));
console.log(rangeArray([4, 10]));
console.log(rangeArray([55, 5]));
console.log(rangeArray([5, 55]));