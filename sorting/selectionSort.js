const arr = [
  25, 4, 18, 35, 8, 3, 45, 105, 19, 33, 48, 71, 98, 145, 165, 30, 14, 26, 38,
  44,
];

const selectionSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
};

console.log("BEFORE SORTING");
console.log(arr);

selectionSort(arr);

console.log("AFTER SORTING");
console.log(arr);
