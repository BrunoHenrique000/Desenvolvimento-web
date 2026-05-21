
// objetos
const aluno = {
    nome: "Grazielli",
    idade: 20,
    curso: "Eng. Software",
    matriculaAtiva: true,
    endereco: {
        rua: "blablabla"
    }
}

const {nome, idade} = aluno

console.log(nome)
console.log(idade)

// console.log(aluno.endereco)

// //arrays
// const listaFrutas = ["Uva", "Laranja"]

// for (let index = 0; index < listaFrutas.length; index++) {
//     const element = listaFrutas[index];
//     console.log("Fruta " + index, element)
// }

// // console.log(listaFrutas);

// //funções
// const NOME = function printNome() {
//     console.log("Bruno")
// }

// NOME();

// function soma(val1, val2) {
//     return val1 + val2;
// }

// console.log(soma(2, 5))

// function subtração(val1, val2) {
//     return val1 - val2;
// }

// console.log

// function calculo(val1, val2) {
//     return console.log(val1, val2)
// }

// console.log(calculo(subtração(2, 4), (soma)(8, 9)))