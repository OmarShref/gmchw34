function swap(x, y, arr) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(j, j - 1, arr);
      j--;
    }
  }
  return arr;
}

let unsorted = [5, 10, 2, 11, 9, 3, 4];
let sorted = insertionSort(unsorted);

console.log(sorted);
