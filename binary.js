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

/*
    Set L to 0 and R to n − 1.
    If L > R, the search terminates as unsuccessful.
    Set m (the position of the middle element) to the floor (the largest previous integer) of (L + R) / 2.
    If Am < T, set L to m + 1 and go to step 2.
    If Am > T, set R to m – 1 and go to step 2.
    Now Am = T, the search is done; return m.
*/

'use strict'

var test_array_genap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test_array_ganjil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function binary_search (search, array) {
  // Your code here
var lowRange = 0, hightRange = array.length-1, middleRange;

while(lowRange <= hightRange){
middleRange = Math.floor((hightRange + lowRange) / 2);
// console.log(middleRange);
if(array[middleRange] < search){
  lowRange = middleRange + 1;
}else if(array[middleRange] > search){
  hightRange = middleRange - 1;
}else{
  return middleRange;
}
}
return -1;
}
// Driver code

console.log(binary_search(10, test_array_genap))
console.log(binary_search(4, test_array_genap))
console.log(binary_search(2, test_array_genap))

console.log(binary_search(30, test_array_ganjil))
console.log(binary_search(11, test_array_ganjil))
console.log(binary_search(1, test_array_ganjil))

module.exports = {
  binary_search
}
