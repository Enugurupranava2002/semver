define(['exports'], (function (exports) { 'use strict';

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

  function div(a, b) {
    return a / b;
  }

  function sub(a, b) {
    return a - b;
  }

  exports.add = add;
  exports.div = div;
  exports.mul = mul;
  exports.sub = sub;

}));
