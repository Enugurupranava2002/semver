export function add(...args) {
  return args.reduce(function (aggregate, num) {
    return aggregate + num;
  });
}

export function mul(...args) {
  return args.reduce(function (aggregate, num) {
    return aggregate * num;
  }, 1);
}

export function div(a, b) {
  return a / b;
}

export function sub(a, b) {
  return a - b;
}
