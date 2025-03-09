function calcular() {
  let capital = document.querySelector("#capital");
  let taxa = document.querySelector("#taxa");
  let tempo = document.querySelector("#tempo");
  let result = document.querySelector("#result");

  capital = Number(capital.value);
  taxa = Number(taxa.value);
  tempo = Number(tempo.value);

  let taxaEmPorcentagem = taxa / 100;
  let group = (1 + taxaEmPorcentagem) ** tempo;

  let montante = capital * group;

  result.textContent = `O montante ao final do período será de ${montante.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  )}`;
}
