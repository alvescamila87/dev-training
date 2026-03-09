function checkInput(a: number | string) {
  if (typeof a === "string") {
    return a.toLocaleLowerCase();
  }

  if (typeof a === "number") {
    return a.toExponential();
  }

  if (typeof a === "boolean") {
    return a;
  }
}

console.log(checkInput("CAMILA"));
