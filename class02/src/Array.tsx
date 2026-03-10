const person = {
  name: "Camila",
  age: 38,
};

type Person = typeof person;

const arrPerson: Person[] = [
  {
    name: "Marlene",
    age: 6,
  },
];

console.log(arrPerson[0]);
