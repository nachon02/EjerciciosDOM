const buttonAdd = document.getElementById("buttonAdd");
const container = document.getElementById("container");
const inputParagraph = document.getElementById("inputParagraph");

buttonAdd.addEventListener("click", () => {
  let valor = inputParagraph.value;

  container.innerHTML += `<p> ${valor}  </p>`;
});