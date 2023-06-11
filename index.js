function add(...args) {
  return args.reduce(function (aggregate, num) {
    return aggregate + num;
  });
}

function mul(...args) {
  return args.reduce(function (aggregate, num) {
    return aggregate * num;
  }, 1);
}

function division(a, b) {
  return a / b;
}

function subraction(a, b) {
  return a - b;
}

function pow(a, b) {
  val = 1;
  for (let i = 0; i < b; i++) {
    val = val * b;
  }
  return val;
}

module.exports = {
  add,
  mul,
  div,
  sub,
};
