'use strict'

var test_array_genap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test_array_ganjil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function binary_search (search, array, tempIndx = 0) {
  let len = array.length;
  if (len >= 2) {
    let icen = Math.ceil(len / 2) - 1 ;
    if (array[icen] === search){
      return tempIndx+icen;
    }
    //search lebi gede
    else if (array[icen] < search) {
      let nlen = len-icen;
      if (len === 2)
        if (array[1] === search) return tempIndx+1;
        else if (array[2] === search) return tempIndx+2;
      icen += 1;
      tempIndx = tempIndx+icen;
      nlen = nlen > 0 ? nlen : 1;
      return binary_search(search, array.splice(icen,nlen),tempIndx);
    }
    //search lebi kecil
    else if (array[icen] > search){
      let nlen = icen;
      if (len === 2) {
        if (array[1] === search) return tempIndx;
        else if (array[2] === search) return tempIndx+1;
      }
      nlen = nlen > 0 ? nlen : 1;
      return binary_search(search, array.splice(0,nlen),tempIndx);
    }
  }
  else if (len === 1 && array[0] === search)  return tempIndx;
  else return -1;

}
//
let test_array ;
test_array = [1,2,3,4,5];
console.log(binary_search(3, test_array) === 2);
test_array = [13,19,24,29,32,37,43];
console.log(binary_search(35, test_array) === -1);
test_array = [100,120,130,135,150,170];
console.log(binary_search(135, test_array)===3);

// Driver code
console.log(binary_search(5, test_array_genap)) // 4
console.log(binary_search(10, test_array_genap)) //9
console.log(binary_search(6, test_array_ganjil)) //5
console.log(binary_search(11, test_array_ganjil)) //10
console.log(binary_search(2, test_array_genap)) //1
console.log(binary_search(2, test_array_ganjil)) //1

// module.exports = {
//   binary_search
// }
