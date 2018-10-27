function choiceSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const notSortedLen = arr.length;
  let temp = null;

  for (let i = notSortedLen - 1; i >= 0; i--) {
    let maxInd = 0;
    for (let j = 1; j <= i; j++) {
      if (arr[j] > arr[maxInd]) {
        maxInd = j;
      }
    }
    if (maxInd !== i) {
      temp = arr[maxInd];
      arr[maxInd] = arr[i];
      arr[i] = temp;
    }
  }

  return arr
}

module.exports = {
  choiceSort
}
