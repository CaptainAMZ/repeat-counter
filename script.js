let word = "Hello World";
let string = word.split("");
let repeat = string.reduce((prevValue, currValue) => {
  return currValue !== " "
    ? { ...prevValue, [currValue]: (prevValue[currValue] || 0) + 1 }
    : prevValue;
}, {});

console.log(repeat);


