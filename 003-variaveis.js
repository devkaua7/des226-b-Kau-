let entrada = require("prompt-sync")();

let nome = "Kaua";
let idade = 17;
let trabalha = true; //false
let endereco = {
  rua: "colibris",
  num: 77,
  bairro: "jardin esplanada",
};
let funcao = () => console.log(Oi); // finciton ex: Bloco de Código
console.log("Tipos de variáveis");
console.log("variavel: nome:" + typeof nome);
console.log("variavel: idade:" + typeof idade);
console.log("variavel: trabalha:" + typeof trabalha);
console.log("variavel: endereco:" + typeof endereco);
console.log("variavel: funcao:" + typeof funcao);

// variáveis defininadas sem valores
let nomedigitado;
let iadadedigitada;
let trabalhadigitada;

console.log();

nomedigitado = entrada("Digite seu Nome: ");
iadadedigitada = entrada("Qual é sua idade: ");
trabalhadigitada = entrada("Você trabalha: ");

console.log("Nome: " + "nomedigitado" + " - Tipo: " + typeof nomedigitado);
console.log("idade: " + "iadadedigitada" + " - Tipo: " + typeof iadadedigitada);
console.log(
  "trabalha:" + "trabalhadigitada" + " - Tipo: " + typeof trabalhadigitada,
);
