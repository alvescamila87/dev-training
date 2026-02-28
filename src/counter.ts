export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

// Exemplo 1
function sum1(a: number, b: number): number {
  return a + b;
}

sum1(1, 2);

// Exemplo 2
type SumType = (a: number, b: number) => number;

const sum2: SumType = (a, b) => {
  return a + b;
};

sum2(1, 2);

// Exemplo 3
const sum3: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

sum3(1, 2);

//Fundamentos importantes TS

function sum4(a: any, b: any) {
  return a - b;
}

console.log(sum4(2, "1"));

//Union type
let v: number | string = "1";

v.toLocaleLowerCase();

//type guard (ternário ou ou ifs)
function fn(a: number | string | boolean) {
  //return typeof a === "number" ? a.toFixed() : a.length;

  // if (typeof a === "number") {
  //   a.toFixed();
  // } else {
  //   a.toLowerCase();
  // }

  if (typeof a === "number") {
    return a.toFixed();
  }

  if (typeof a === "string") {
    return a.toLowerCase();
  }

  return a.valueOf();
}

//Tipagem de array
const arr1 = [1, 2, 3, "camila"]; //não recomendado
const arr2: number[] = [1, 2, 3, "camila"];
const arr3: Array<number | string> = [1, 2, 3, "camila"]; //generic, usar esse caso somente quando tiver dois tipos

//Tipagem de objetos

//Tipagem por inferência
const person = {
  name: "Camila",
  age: 38,
  hobbies: ["Bike", "Trekking"],
};

type Person = typeof person;

const car = {
  brand: "VW",
  model: "gol",
  engine: "2.0",
};

type Car = typeof car;

// control + backspace já aparece as propriedades do tipo
const arr4: Person[] = [
  {
    age: 6,
    name: "Marlene",
    hobbies: ["latir", "dormir"],
  },
];
