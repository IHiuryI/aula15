let nomes = [];

function cadastrar() {
  let nome = document.getElementById("nomeAluno").value;
  nomes.push(nome);
}

function imprimir() {
  for (let i = 0; i < nomes.length; i++) {
  document.getElementById("imprime").innerHTML += `${nomes[i]}<p> `;
  }
}

function limpar() {
  nomes = [];
  document.getElementById("limpar").innerHTML = "";
}
