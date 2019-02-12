// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunker = (array, size) => {
  let finalArray = [];
  for (let i = 0; i < array.length; i += 1) {
  let lastArray = finalArray[finalArray.length - 1];
  let number = array[i];
  if (!lastArray || lastArray.length >= size) {
  finalArray.push([number]);
  } else {
  lastArray.push(number);
  }
  }
  
  return finalArray;
  }
  
  // chunked is the final array
  // lastChunk is the final sub array in chunked
  // we are pushing one number at a time into a sub array unless it doesn't exist or is equal to OR LARGER than 'size'
  // if it is larger, push existing sub array and CREATE a new array with number in it
  // if there is no more numbers, stop, push current sub array, and return the final array with all sub arrays
  
  
  console.log(chunker([1, 2, 3, 4], 2)) // --> [[ 1, 2], [3, 4]]
  console.log(chunker([1, 2, 3, 4, 5], 2)) // --> [[ 1, 2], [3, 4], [5]]
  console.log(chunker([1, 2, 3, 4, 5, 6, 7, 8], 3)) // --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
  console.log(chunker([1, 2, 3, 4, 5], 4)) // --> [[ 1, 2, 3, 4], [5]]
  console.log(chunker([1, 2, 3, 4, 5], 10)) // --> [[ 1, 2, 3, 4, 5]]

module.exports = chunk;
