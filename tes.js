let array = [1, 2, 7, 8, 9]
let search = 1;

let foundIndex;
let minIndex = 0
let maxIndex = array.length - 1;

for (let i = 0; i < array.length; i++) {
  let midIndex = parseInt((maxIndex + minIndex) / 2);
  if (search == array[midIndex]) {
    foundIndex = midIndex;
    console.log("ketemu + " + foundIndex);
    break;
  } else if (search > array[midIndex]) {
    minIndex = midIndex + 1;
    console.log("min-nya " + minIndex + " max" + midIndex);
  } else if (search < array[midIndex]) {
    maxIndex = midIndex - 1;
    console.log("min-nya" + minIndex + " max-nya " + maxIndex)
  }

}
if (minIndex > maxIndex) {
  console.log("-1");
} else {
  console.log(foundIndex);
}
