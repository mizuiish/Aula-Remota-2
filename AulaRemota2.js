let listaDeAlunos = ["Jéssica", "Odirlei", "Thiago", "Caique"];

for (let contador = 0; contador < listaDeAlunos.length; contador++) {
    // console.log(contador);
    
    if (contador == 0) {
        console.log("O número atual é 0.")
    }
    else if (contador % 2 == 0) {
        console.log("O número " + contador + " é par.")
    }
    else{
        console.log(`O número ${contador} é ímpar.`)
    }
}

for (let nome of listaDeAlunos) {
    console.log(`O nome dessa pessoa é ${nome}`)
}