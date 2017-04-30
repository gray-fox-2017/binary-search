'use strict'

var test_array_genap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var test_array_ganjil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function binary_search (search, array) {
  let count = 0;

  function cariAngka(search, array) {

    var tengah1 = Math.floor(array.length/2);
    var tengah2 = Math.ceil(array.length/2);
    var tengah3 = tengah1-1;

    if (search < array[0]) {
      return -1;

    } else if (search > array[array.length-1]) {
      return -1;

    } else if (search === array[tengah1]) {
      let index = (tengah1+=count);
      return search + ' ada di index ke-' + index;

    } else if (search === array[tengah2]) {
      let index = (tengah2+=count);
      return search + ' ada di index ke-' + index;

    } else if (search === array[tengah3]) {
      let index = (tengah3+=count);
      return search + ' ada di index ke-' + index;

    } else if (search < array[tengah1]) {
      let newArr = array.slice(0, tengah1);
      return cariAngka(search, newArr);

    } else if (search > array[tengah1]) {
      let newArr = array.slice(tengah1+1, array.length);
      tengah1++
      count += tengah1;
      return cariAngka(search, newArr);
    }
  }

  return cariAngka(search, array);

}

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


console.log('Test Array Ganjil')
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
