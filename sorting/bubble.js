function bubbleSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const length = arr.length;
  let temp = null;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 1; j < length - i; j++) {
      if (arr[j-1] > arr[j]) {
       temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
  }

  return arr
}

module.exports = {
  bubbleSort
}
