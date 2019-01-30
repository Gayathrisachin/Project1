"use strict";

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  }
}
