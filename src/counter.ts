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
