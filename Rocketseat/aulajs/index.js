// para entrarna pasta    cd / .....

// Programa que calcula a média
// das notas dos alunos
// envia mensagem no cálculo da média.


const aluno01 = 'Lara';
const notaAluno01 = 9.8;

const aluno02 = 'Gabriel';
const notaAluno02 = 6.3;

const aluno03 = 'Raul';
const notaAluno03 = 10;

//const aluno04 = `Valeska e ${nome}`;      -> aceita chamar outras variáveis dessa forma

//console.log(typeof notaAluno01);          -> mostra no terminal qual é o tipo da variável

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3; 

// Se a média for maior que 5, parabenizar a turma
    if(media > 5){
        console.log(`A media foi de ${media}. Parabéns!!`);
    } else{
        console.log("A média é menor que 5... disappointed but not surprised :(");
    }


//console.log(media > 5);
