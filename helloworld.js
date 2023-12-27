function myMap(arr,fn){
    var temp = [];
    for (let x of arr){
        temp.push(fn(x))
    }
    return temp;
}

var arr = [1,2,3,4];
console.log(myMap(arr,Math.sqrt))
