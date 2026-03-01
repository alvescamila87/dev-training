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
  hobbies: ["Trekking", "Bike"],
};

type Person = typeof person;

const arr4: Person[] = [
  {
    age: 36,
    name: "João",
    hobbies: ["Sleeping", "Cooking"],
  },
];

const car = {
  brand: "BMW",
  model: "X6",
};

//extração de tipo através de objeto criado, no momento do array permite autocomplete
type Car = typeof car;

const arr5: Car[] = [
  {
    brand: "VW",
    model: "Golf",
  },
];

type Product = { product: string; name: string; items: number };

const arr6: Product = [
  {
    product: "Livro",
    name: "O senhor dos anéis",
    items: 100,
  },
];

// interface: é mutável, permite extender
type Person2 = Person & {
  surname: "José";
};

const person2: Person2 = {
  name: "Maria",
  age: 30,
  surname: "José",
  hobbies: ["Orar", "Rogar"],
};

interface Car2 {
  motor: string;
  brand: string;
}

interface Car2 {
  speed: number;
}

//garantir imutabilidade
type PersonName = {
  name: string;
};

type PersonSurname = {
  surname: string;
};

type PersonWithSurname = PersonName & PersonSurname;

const cliente: PersonWithSurname = {
  name: "Maria",
  surname: "Aparecida",
};
