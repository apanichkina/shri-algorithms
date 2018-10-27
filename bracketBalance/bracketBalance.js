function bracketBalance(line) {
  const stack = [];
  for (let i = 0; i < line.length; i++) {
    let char = line.charAt(i);
    if (['{', '[', '('].includes(char)) {
      stack.push(char)
    } else if (['}', ']', ')'].includes(char) && getOpen(char) !== stack.pop()){
      return false
    }
  }
  return !stack.length;

}

function getOpen(bracket) {
  switch (bracket) {
    case '}':
      return '{';
    case ']':
      return '[';
    case ')':
      return '(';
    default:
      return ''
  }
}


module.exports = {
  bracketBalance
};
