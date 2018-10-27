function wide(node, result) {
  const queue = [node];
  while(queue.length) {
    let el = queue.shift();
    result.push(el.value);
    if (el.children.length){
      el.children.forEach((child) => {
        queue.push(child)
      })
    }
  }
}


module.exports = {
  wide
};
