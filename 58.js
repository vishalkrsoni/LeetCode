var string = "hello,           how are you?       ";
let str = "   fly me   to   the moon  ";

var lengthOfLastWord = (str) =>
  str.replace(/\s\s+/g, " ").trim().split(" ").reverse()[0].length;

var lengthOfLastWord3 = (str) => str.trim().split(/\s+/).reverse()[0].length;

console.log(lengthOfLastWord3(str));
