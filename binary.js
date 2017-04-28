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
   //Your code here
   var count = 0

   function cariAngka(search, array) {
     var tengah = Math.floor(array.length/2);
     var tengah2 = Math.ceil(array.length/2); //tambah tengah dan tengah 2 cuy
     var seperempat = Math.ceil(array.length/4);
     var tigaPerempat = Math.ceil(array.length*3/4)
     if (tigaPerempat === tengah) {
       tigaPerempat++
     }
     if (seperempat === tengah) {
       seperempat--
     }
     if (search === array[tengah]) {
       let index = count + tengah
       return search +' ada di index ke-' + index;

     } else if (search === array[seperempat]) {
       let index = count + seperempat
       return search +' ada di index ke-' + index;

     } else if (search === array[tigaPerempat]) {
       let index = count + tigaPerempat
       return search +' ada di index ke-' + index;

     } else if (array.length < 4) {
       let index = array.indexOf(search) + count;
       return search +' ada di index ke-' + index;

     } else if(search < array[0] || search > array[array.length-1]) {
       return -1

     } else if (search < array[seperempat]) {
       count += 0
       let newArr = array.slice(0, seperempat);
       return cariAngka(search, newArr);

     } else if (search > array[tigaPerempat]) {
       count += tigaPerempat;
       let newArr = array.slice(tigaPerempat+1, (array.length-tigaPerempat)-1);
       return cariAngka(search, newArr);

     } else if (array[tengah] < search < array[tigaPerempat]) {
       count += tengah;
       let newArr = array.slice(tengah+1, tigaPerempat-tengah-1);
       return cariAngka(search, newArr);

     } else if (array[seperempat] < search < array[tengah]) {
       count += seperempat;
       let newArr = array.slice(seperempat+1, tengah-seperempat-1);
       return cariAngka(search, newArr);
     } else {
       return 'masih bug nih yee'
     }
   }

   return cariAngka(search, array)

}

//Driver code
console.log('Test Array Genap')
console.log(binary_search(1, test_array_genap))
console.log(binary_search(2, test_array_genap))
console.log(binary_search(3, test_array_genap))
console.log(binary_search(4, test_array_genap))
console.log(binary_search(5, test_array_genap))
console.log(binary_search(6, test_array_genap))
console.log(binary_search(7, test_array_genap))
console.log(binary_search(8, test_array_genap))
console.log(binary_search(9, test_array_genap))
console.log(binary_search(10, test_array_genap))

/*console.log('Test Array Ganjil')
console.log(binary_search(1, test_array_ganjil))
console.log(binary_search(2, test_array_ganjil))
console.log(binary_search(3, test_array_ganjil))
console.log(binary_search(4, test_array_ganjil))
console.log(binary_search(5, test_array_ganjil))
console.log(binary_search(6, test_array_ganjil))
console.log(binary_search(7, test_array_ganjil))
console.log(binary_search(8, test_array_ganjil))
console.log(binary_search(9, test_array_ganjil))
console.log(binary_search(10, test_array_ganjil))
console.log(binary_search(11, test_array_ganjil))

console.log(binary_search(15, test_array_ganjil))
console.log(binary_search(22, test_array_ganjil))
*/
module.exports = {
  binary_search
}

//cadangan
//
// var test_array_ganjil = [1, 2, 3, 4, 5];
// var test_array_genap = [1, 2, 3, 4, 5, 6]
//
// function binary_search(search, arr) {
//   if (search < arr[0]) {
//     return -1
//   } else if (search > arr[(arr.length)-1]) {
//     return -1
//   }
//
//   if (arr.length % 2 === 0) {
//     var tengah = (arr.length/2)-1;
//
//   } else {
//     var tengah = (Math.floor(arr.length/2));
//   }
//
//   if (search = arr[tengah]) {
//
//       return search + ' ada di index ke-' + tengah
//
//     } else if (search > arr[tengah]) {
//
//       let arrB = arr.slice(tengah+1, array.length-1)
//
//       return binary_search(search, arrB);
//
//     } else if (search < arr[tengah]) {
//
//       let arrB = arr.slice(0, tengah-1);
//
//       return binary_search(search, arrB);
//     }
// }
