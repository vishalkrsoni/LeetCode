var fibArray = function(n) {
  let fibGenerator = function*() {
    let a = 0;
    let b = 1;

    yield a;

    for (let i = 1; i < n; i++) {
      yield b;
      let next = a + b;
      a = b;
      b = next;
    }
  };

  return Array.from(fibGenerator());
};

// console.log(fibGenerator(5))

// fibGenerator(5)