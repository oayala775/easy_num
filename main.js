const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const leer = (question) => {
  return new Promise((resolve) => {
    r1.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const estados = ["inicial", "binario", "octal", "decimal", "hexadecimal"];

const f = [
  [1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4],
  [1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4],
  [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

async function main() {
  const numero = await leer("Numero: ");
  r1.close();

  let estado = 0,
    chr,
    idx;

  for (let i = 0; i < numero.length; i++) {
    chr = numero[i];

    if (/[a-fA-F]/.test(chr)) {
      idx = 10;
    } else if (/[0-9]/.test(chr)) {
      idx = Number(chr);
    } else {
      console.log("Error");
      return;
    }

    estado = f[estado][idx];
  }

  for (let i = estado; i < estados.length; i++) {
    console.log(`${estados[i]}`);
  }
}

main();
