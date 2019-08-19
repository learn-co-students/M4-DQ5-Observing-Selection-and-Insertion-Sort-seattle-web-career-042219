function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimumIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
      const temp = arr[i];
      arr[i] = arr[minimumIndex];
      arr[minimumIndex] = temp;
      console.log(arr);
    }
  }
  return arr;
}

selectionSort([5, 4, 3, 2, 1]);
