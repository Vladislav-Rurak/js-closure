inc = Number(prompt("Введите шаг"));
function customCounter() {
  let i = 0;

  return function () {
    return (i += inc);
  };
}

const counter1 = customCounter(5);
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

const counter2 = counter();
console.log(
  "counter2() :>> ",
  counter2()
);
console.log(
  "counter2() :>> ",
  counter2()
);
console.log(
  "counter2() :>> ",
  counter2()
);
console.log(
  "counter2() :>> ",
  counter2()
);

console.log(
  "counter1() :>> ",
  counter1()
);
