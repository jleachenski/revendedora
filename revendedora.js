const carros = [];
const marcas = ["fiat", "renault", "chevrolet", "kia"];

const indiceValido = (indice) =>
  !isNaN(+indice) && indice >= 0 && indice < carros.length;

function criar(carro) {
  if (marcas.includes(carro.marca)) {
    carros.push(carro);
    console.log("carro criado");
  } else {
    console.log("marca invalida");
  }
}

const listar = function () {
  carros.forEach(function (carro, indice) {
    console.log(++indice, carro);
  });
};

const atualizar = (carro, indice) => {
  if (marcas.includes(carro.marca) && indiceValido(indice)) {
    carros[indice] = carro;
    console.log("carro atualizado");
  } else {
    console.log("marca invalida");
  }
};

const remover = (indice) => {
  if (indiceValido(indice)) {
    carros.splice(indice, 1);
    console.log("carro removido");
  } else {
    console.log("indice invalido");
  }
};
