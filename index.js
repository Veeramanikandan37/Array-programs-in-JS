//Generating an array of a ranges
// function range(start,end){
//      return Array.from({length:end-start+1},(v,k)=>k+start);
// }
// const arr = range(20,80);
// console.log(arr);

//Rotating of an array
let arr1=[1,2,3,4,5,6,7];
function rotate(arr,len){
    let temp;
    let count=0;
    while(count!=len%arr.length){
        temp =arr[arr.length-1];
    for(let i=arr.length-1;i>=0;i--)
    {
        arr[i]=arr[i-1]
    }
        arr[0]=temp;
        count++;
    }
    return arr;
}
let rotatearr=rotate(arr1,10);
console.log(rotatearr);

//Creating a new array with a given length 
// let length = 3;
// let value = 10;
// let arr2= new Array(length).fill(value);
// console.log(arr2);

//array dedulication
// let arr3 = [7,2,2,0,8,8,8,9,10];
// let res= [...new Set(arr3)];
// console.log(res);

//finding diff btwn two arrays
// let arrayA = [1, 2, 3, 4, 5];
// let arrayB = [4, 5, 6, 7];
// let diffAB = arrayB.filter(item => !arrayA.includes(item));
// console.log(diffAB);

//looping array elements
// let array2 = ['sam','mugesh','praveen','veeramani'];
// for (let i = 0; i < array2.length; i++) {
// console.log(array2[i]);
// }


 