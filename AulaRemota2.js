// let listaDeAlunos = ["Jéssica", "Odirlei", "Thiago", "Caique"];

// for (let contador = 0; contador < listaDeAlunos.length; contador++) {
//     // console.log(contador);
    
//     if (contador == 0) {
//         console.log("O número atual é 0.")
//     }
//     else if (contador % 2 == 0) {
//         console.log("O número " + contador + " é par.")
//     }
//     else{
//         console.log(`O número ${contador} é ímpar.`)
//     }
// }

// for (let nome of listaDeAlunos) {
//     console.log(`O nome dessa pessoa é ${nome}`)
// }

//acima está o exercício conforme feito na aula, abaixo segue o desafio proposto pelo professor

let listaDeAlunos = ["Jéssica", "Odirlei", "Thiago", "Caique"];
let contador = 1 //coloquei o contador com 1 para que a lista começasse a contar a partir do número 1

for (let contador = 1; contador < listaDeAlunos.length; contador++) {

    for (let nome of listaDeAlunos) {
        
       if (contador % 2 == 0) {
            console.log(`${nome} é o número ${contador} na lista, e seu número é par.`)
        }
        else {
            console.log(`${nome} é o número ${contador} na lista, e seu número é ímpar.`)
        }
    contador++
    }
}

//como removi o 0 no contador também removi o if que considerava o valor 0, deixando apenas o if e else para testar as condições