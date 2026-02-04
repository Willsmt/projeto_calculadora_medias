// global
const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="./image/aprovado.png" alt="Emoji Aprovado"/>`;
const imgReprovado = `<img src="./image/reprovado.png" alt="Emoji reprovado"/>`;
const arrayAtividades = [];
const arrayNotas = [];
const spanAprovado = '<span class = "resultado aprovado"> Aprovado</span>';
const spanReprovado = '<span class = "resultado reprovado"> Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a Nota Minima:"));

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
});
// adiciona a linha
function adicionaLinha() {
  const atividade = document.getElementById("nome-atividade");
  const nota = document.getElementById("nota");

  if (arrayAtividades.includes(atividade.value)) {
    alert(` A atividade: ${atividade.value} ja foi inserida`);
  } else {
    arrayAtividades.push(atividade.value);
    arrayNotas.push(parseFloat(nota.value));
    let linha = `<tr>`;
    linha += `<td>${atividade.value}</td>`;
    linha += `<td>${nota.value}</td>`;
    linha += `<td>${nota.value >= notaMinima ? `${imgAprovado}` : `${imgReprovado}`}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  atividade.value = "";
  nota.value = "";
}
// atualiza a tabela
function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById("mediaFinalValor").innerHTML =
    arrayNotas.length === 0 ? "--" : mediaFinal.toFixed(2);

  document.getElementById("mediaFinalResultado").innerHTML =
    arrayNotas.length === 0
      ? ""
      : mediaFinal >= 7
        ? spanAprovado
        : spanReprovado;
}

function calculaMediaFinal() {
  let somaDasNotas = 0;
  arrayNotas.forEach((nota) => (somaDasNotas += nota));
  return somaDasNotas / arrayNotas.length;
}
