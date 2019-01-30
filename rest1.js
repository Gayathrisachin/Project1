"use strict";

function sum() {
  var total = 0;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var _i = 0; _i < args.length; _i++) {
    var a = args[_i];
    total += a;
  }

  console.log(total);
}

sum(1, 2, "a", "b", 3, 4);
