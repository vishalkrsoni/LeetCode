var longestPalindrome = function (str1) {
  var max_length = 0, maxPal ='';
  for (var i = 0; i < str1.length; i++) {
    var strStart = str1.substr(i, str1.length);
    for (var j = strStart.length; j >= 0; j--) {
      var strEnd = strStart.substr(0, j);
      if (strEnd.length <= 1)
        continue;
      if (strEnd == strEnd.split('').reverse().join('')) {
        if (strEnd.length > max_length) {
          max_length = strEnd.length;
          maxPal = strEnd;
        }
      }
    }
  }
  return maxPal;
}