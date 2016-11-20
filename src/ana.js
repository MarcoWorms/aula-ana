function test() {
  console.log(this);
}

test.bind(2)();
