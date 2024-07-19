
let input = [1, 2, 0, 0, 4, 0, 8, 0, 6, 0, 8];
const moveZeroes = (arr) => {
  let writeIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
  }

  for (let i = writeIndex; i < arr.length; i++) arr[i] = 0;

  return arr;
};

console.log(moveZeroes(input));
