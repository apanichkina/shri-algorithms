function dive(node, result) {
  result.push(node.value)
  node.children.forEach((el) => {
    dive(el, result)
  })
}


module.exports = {
  dive
};
