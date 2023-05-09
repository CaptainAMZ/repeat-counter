let word = "Hello World";
let reg = /^[A-Za-z0-9]/
let string = word.split("");
let repeat = string.reduce((prevValue, currValue) => {
  return currValue.match(reg)
    ? { ...prevValue, [currValue]: (prevValue[currValue] || 0) + 1 }
    : prevValue;
}, {});

console.log(repeat);
