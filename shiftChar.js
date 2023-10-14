const shiftLetter = (str, num) => {
  var output = '';
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i <= str.length - 1; i++) {
    var char = str.charAt(i);
    if (alpha.indexOf(char) + num < 26) {
      var newChar = alpha.charAt(alpha.indexOf(char) + num)
    }
    else {
      newChar = alpha.charAt(alpha.indexOf(char) + num - 26)
    }
    output += newChar
  }
  return output
}
console.log(shiftLetter('xyz', 3))
