function insertSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const length = arr.length;
  const max = arr[0];
  let temp = null;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
       temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr
}

module.exports = {
  bubbleSort
}
