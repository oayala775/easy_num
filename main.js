//! Que sucede con 10.005 o 11,000 

const estados = ["inicial", "binario", "octal", "decimal", "hexadecimal"];

const f = [
  [1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4],
  [1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4],
  [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario recargue la página

  const numero = document.getElementById("number").value;
  let estado = 0, chr, idx;
  let resultadoDiv = document.getElementById("resultado");
  let resultado = "";

  if (numero != "") {
    for (let i = 0; i < numero.length; i++) {
      chr = numero[i];

      if (/[a-fA-F]/.test(chr)) {
        idx = 10;
      } else if (/[0-9]/.test(chr)) {
        idx = Number(chr);
      } else {
        resultadoDiv.innerHTML = `<p class="texto-resultado error">No se ha podido reconocer el sistema numerico debido al carácter inválido: "${chr}"</p>`;
        retardo(resultadoDiv);
        return;
      }

      estado = f[estado][idx];
    }

    resultado = '<p class="texto-resultado">El valor ingresado puede pertenecer a los siguientes sistemas numéricos:</p>';
    for (let i = estado; i < estados.length; i++) {
      resultado += `<p class="texto-resultado">• ${estados[i]}</p>`;
    }
    resultadoDiv.innerHTML = resultado;
    retardo(resultadoDiv);
  } else {
    resultado = '<p class="texto-resultado error">No se ha ingresado ningun número<p>'
    resultadoDiv.innerHTML = resultado;
    retardo(resultadoDiv);
  }
});

function retardo(resultadoDiv) {
  setTimeout(() => {
    resultadoDiv.innerHTML = "";
  }, 5000);
}