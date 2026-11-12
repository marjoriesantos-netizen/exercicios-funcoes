
function par(n) {
  return n % 2 === 0;
}

function media(notas) {
  if (notas.length === 0) {
    return 0;
  }

  const soma = notas.reduce((total, nota) => total + nota, 0);

  return soma / notas.length;
}

function filtrarMaiores18(usuarios) {
  return usuarios.filter(usuario => usuario.age >= 18);
}

module.exports = {
  par,
  media,
  filtrarMaiores18
};
