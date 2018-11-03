function revertList(listInput) {
  const list = Object.assign({}, listInput);
  let temp = {
    current: list,
    prev: null,
  };

  while (temp.current) {
    const {current, prev} = temp;

    let newCurrent = current.next;
    let newPrev = current;
    newPrev.next = prev;

    temp = {current: newCurrent, prev: newPrev};
  }

  return temp.prev
}

module.exports = {
  revertList
};
