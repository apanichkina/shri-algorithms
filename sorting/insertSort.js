function insertSort(arrInput) {

  const arr = arrInput.slice();
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const length = arr.length;
  const notSortedLen = length - 2;

  for (let i = notSortedLen; i >= 0; i--) {
    let lastNotSorted = arr[i];

    let j = i + 1;

    while(arr[j] < lastNotSorted && j <= length - 1) {
      arr[j - 1] = arr[j];
      j++;
    }

    arr[j - 1] = lastNotSorted;
  }

  return arr
}

module.exports = {
  insertSort
}
