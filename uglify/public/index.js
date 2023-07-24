function sum(var1, var2) {
  return var1 + var2;
}

function info(name) {
  const age = sum(10, 12);
  const profession = "Software Developer";
  const message = `Hello ${name}, you are ${age} years old and you are a ${profession}`;
  console.log(message);
}

info("Bianca Caetano");
