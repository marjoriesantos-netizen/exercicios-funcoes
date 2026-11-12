
const { par, media, filtrarMaiores18 } = require('./funcoes');

console.log('Testes da função par:');
console.log(par(2));
console.log(par(3));
console.log(par(0));

console.log('Testes da função media:');
console.log(media([7, 8, 9]));
console.log(media([]));

console.log('Testes da função filtrarMaiores18:');

const usuarios = [
  { name: 'Ana', age: 22 },
  { name: 'Beto', age: 17 },
  { name: 'Carla', age: 30 },
  { name: 'João', age: 18 }
];

console.log(filtrarMaiores18(usuarios));

