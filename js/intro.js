inc = Number(prompt("Введите шаг"));
function customCounter(inc) {
  let i = 0;

  return function () {
    return (i += inc);
  };
}

const counter1 = customCounter(inc);
console.log(
  "counter1() :>> ",
  counter1()
);
console.log(
  "counter1() :>> ",
  counter1()
);
console.log(
  "counter1() :>> ",
  counter1()
);
console.log(
  "counter1() :>> ",
  counter1()
);
