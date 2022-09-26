const solution = function (isBadVersion) {
  return function (n) {
      let left = 1, right = n;
      while (left < right) {
          let mid = Math.floor((left + right) / 2)
          if (isBadVersion(mid)) right = mid - 1;
          else left = mid + 1;
      }
      if (isBadVersion(left)) return left;
      return left + 1;
  }
}