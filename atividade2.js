console.log("Informe nome e idade para efetuar cadastro.")

// simulei variáveis com pessoas com idades diferentes para testar a condição na hora de efetuar o cadastro

let nome = "Amanda"
let idade = 18

//variável feita para teste caso alguém menor de 18 anos tente se cadastrar.
// let nome = "Marcos"
// let idade = 17

let participantes = ["Amanda", " Jéssica", " Pedro", " Maurício", " Ricardo"]

let listaDePalestras = ["Versionamento", "Fundamentos de Tecnologia da Informação e Comunicação", "Saúde e Segurança no Trabalho", "Metodologias Ágeis"]

if (idade >= 18 && participantes.length <= 100) {
    console.log("Cadastro feito com sucesso! Essa é a lista de palestras disponíveis: " +listaDePalestras + ". Esses são os participantes cadastrados: " + participantes + ".")
}
else if (idade >=18 && participantes.length > 100){
    console.log("Não há mais vagas para inscrição.")
}
else {
    console.log("Para efetuar cadastro é necessário ter no mínimo 18 anos.")
}

