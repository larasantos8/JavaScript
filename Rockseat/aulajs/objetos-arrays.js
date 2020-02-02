
// Objetos é uma coleção de proriedades que recebem valores ou funcionalidades (ex: objetos de alunos)

// Programa que calcula a média
// das notas das turmas de alunos
// envia mensagem no cálculo da média.

const alunosturmaA = [
    {
        nome: "Lara",
        nota: 10
    },
    {
        nome: "Gabriel",
        nota: 10
    },
    {
        nome: "Andressa",
        nota: 10
    }   
]

const alunosturmaB = [
    {
        nome: "Vitor",
        nota: 5
    },
    {
        nome: "Vanessa",
        nota: 5
    },
    {
        nome: "Gustavo",
        nota: 5
    }   
]

function calculaMedia(alunos){ // let permite que o valor de i seja alterado diferente de const
   let soma = 0;
    for(let i = 0; i < alunos.length; i++){
       soma = soma + alunos[i].nota;  
   }

   const media = soma / alunos.length;
   return media;
}

const media1 = calculaMedia(alunosturmaA);
const media2 = calculaMedia(alunosturmaB);

function enviaMensagem(media, turma){
    if(media > 5){
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns!!`);
    } else{
        console.log(`A média da turma ${turma} é menor que 5... disappointed but not surprised :)`);
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')