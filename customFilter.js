function customFilter(arr,fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const evenNumbers = customFilter(numbers, function(number) {
//     return number % 2 === 0;
//   });
  const evenNumbers = customFilter(numbers, even = x => x%2===0)
  
  console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
  