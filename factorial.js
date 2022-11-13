const fact = (num) => {
  if (num == 1 || num == 0) return 1;
  else return num * fact(num - 1);
}
console.log(fact(4));
console.log(fact(5));
