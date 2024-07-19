const fact = (num) => {
  if (num == 1 || num == 0) return 1;
  else return num * fact(num - 1);
};
console.log(fact(4));
console.log(fact(5));

const fact1 = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++) res *= i;

  return res;
};

console.log(fact1(4));
console.log(fact1(5));
