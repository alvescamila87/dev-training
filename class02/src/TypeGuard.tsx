function checkInput(a: number | string | boolean) {
  if (typeof a === "string") {
    return a.toLocaleLowerCase();
  }

  if (typeof a === "number") {
    return a.toExponential();
  }

  if (typeof a === "boolean") {
    return a.valueOf();
  }
}

console.log(checkInput("CAMILA"));
