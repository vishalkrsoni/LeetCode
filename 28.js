var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.split("").splice(i, needle.length).join("") === needle)
      return i;
  }
  return -1;
};
