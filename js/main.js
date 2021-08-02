/* VAR E STRINGS
var nome = "Dalmo Rainer";
var idade = 20;
var frase = "Brasil é o melhor time do mundo.";

alert("Bem vindo " + nome + ", você tem " + idade + " anos.");
console.log(nome + " tem " + idade);

console.log(frase.replace("Brasil", "Japão"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/

/* ARRAY
var frutas = ["morango", "uva", "maçã", "pêra"];

frutas.push("laranja");
frutas.pop();

console.log(frutas.length);

console.log(frutas.reverse());

console.log(frutas.toString());

console.log(frutas.join(" | "));

console.log(frutas);
*/

/* DICIONÁRIO / OBJETO
var fruta = { nome: "uva", cor: "roxa" };

console.log(fruta.nome);

for (let propriedade in fruta) {
    console.log(propriedade + ": " + fruta[propriedade]);
}
*/

/* COLEÇÃO DE OBJETOS(ARRAY)
var frutas = [
    { nome: "maçã", cor: "vermelho", quantidade: 5 },
    { nome: "laranja", cor: "alaranjado", quantidade: 3 },
    { nome: "uva", cor: "roxa", quantidade: 10 }
];

console.log(frutas[0].nome);
*/

/* ESTRUTURAS CONDICIONAIS
var idade = prompt("Qual é a sua idade: ");

if (idade >= 18) {
    alert("Você é maior de idade");
} else {
    alert("Você é menor de idade");
};
*/

/* LAÇOS DE REPETIÇÃO
var numero = prompt("Digite um número entre 1 e 10: ");

for (var contador = 0; contador <= 10; contador++) {
    var resultado = numero * contador;
    alert(resultado);
}

while (contador <= 10) {
    var resultado = numero * contador;
    alert(resultado);
    contador++;
};
*/

/* DATE
var data = new Date();
alert(data.getDay() + 1);
alert(data.getMonth() + 1);
alert(data.getMinutes());
alert(data.getHours());
*/

/* FUNÇÕES
function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Brasil", "Brasil", "Japão"));


var validar = 0; VARIAVEL GLOBAL

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade: ");
validaIdade(idade);
alert(validar);
*/

function clicado() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar. Click aqui";
}

function redirecionar() {
    //window.open("https://www.devmedia.com.br/");
    window.location.href = "https://www.devmedia.com.br/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse aqui";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}