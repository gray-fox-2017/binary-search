/*
TESTS

test_array_a = (100..200).to_a
test_array_b = (100..201).to_a
puts binary_search(135, test_array) == 35
*/

/*
PSEUDOCODE

- create a method, binary_search, that takes an object and an array as an input.
- the object is the number we are testing for to find the index position
- the array is our data set which we will be comparing our object against to find the index position
- establish the index position of the element in our array which is the mid-way point in our array (probably by using array.length)
- make sure that this works for both even and odd array lengths
- create a method to cut our array length in half, and determine if our object is higher or lower than the array number at that "half array" index position
- if our number is exactly the same as the "half array" index number, return the index position of that number in the array.
- if our number is higher, discard the lower half of our array set and continue testing against the upper half of our array (taking the middle position each time).
- if lower, do the opposite of above.
- continue until "half_array" index is equal to number, at which point return the index position of number chosen.
*/

'use strict'

var test_array_genap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test_array_ganjil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function binary_search (search, array) {
  let len = array.length;
  if (len >= 2) {
    let icen = Math.ceil(len / 2) - 1 ;
    if (array[icen] === search) return icen;
    else if (array[icen] < search) {
      for (let i = icen + 1 ; i < len; i++)
        if (array[i] === search) return i;
      let nlen = len-icen;
      return binary_search(search, array.splice(icen+1,nlen));
    }
    else if (array[icen] > search){
      for (let i = 0 ; i < icen; i++)
        if (array[i] === search) return i;
      let nlen = icen-1;
      return binary_search(search, array.splice(0,nlen));
    }

  }else return -1;



}

let test_array = [1,2,3,4,5];
console.log(binary_search(3, test_array) === 2);
test_array = [13,19,24,29,32,37,43];
console.log(binary_search(35, test_array) === -1);
test_array = [100,120,130,135,150,170];
console.log(binary_search(135, test_array) === 3);

// // Driver code
console.log(binary_search(5, test_array_genap)) // 4
console.log(binary_search(10, test_array_genap)) //9
console.log(binary_search(2, test_array_genap)) //1
console.log(binary_search(6, test_array_ganjil)) //5
console.log(binary_search(11, test_array_ganjil)) //10
console.log(binary_search(2, test_array_ganjil)) //1
//
// module.exports = {
//   binary_search
// }
