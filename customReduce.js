function customReduce(arr,fn){
    var acc = arr[0];
    for (var i=1;i<arr.length;i++){
        acc = fn(acc,arr[i]);
    }
    return acc;
}

const message = ["JavaScript ", "is ", "fun."];
console.log(customReduce(message,add = (x,y) => x+y))