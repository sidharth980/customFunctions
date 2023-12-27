function customForEach(arr,fn){
    for(let i=0;i<arr.length;i++){
        fn(arr[i])
    }
}

const message = ["JavaScript ", "is ", "fun."];
customForEach(message,console.log)