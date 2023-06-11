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

function sub(a, b) {
  return a - b;
}

module.exports = {
  add,
  mul,
  div,
  sub,
};
