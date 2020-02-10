//      Cálculo de aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa. 

// idade + contribuicao = 85
// O tempo de contribuição mínimo para mulheres, 30 anos;
//mulher precisa ter no mínimo 85 anos na soma da idade com o tempo de contribuição 



const nome = 'Silvana';
const sexo = 'M';
const idade = 50;
const contribuicao = 35;

const somaAposentadoria = idade + contribuicao;

if (sexo === 'F')
    (somaAposentadoria >= 85 && contribuicao >= 30) ? console.log(`${nome}, você pode se aposentar!`) : console.log(`${nome}, você não pode se aposentar!`);

(somaAposentadoria >= 95 && contribuicao >= 35) ? console.log(`${nome}, você pode se aposentar!`): console.log(`${nome}, você não pode se aposentar!`);



/* 
Solução proposta:

if(sexo === 'F'){
if (somaAposentadoria >= 85 && contribuicao >= 30){
    console.log(`${nome}, você pode se aposentar!`);
} else {
    console.log(`${nome}, você não pode se aposentar!`);
}
}

if(sexo != 'F'){
    if (somaAposentadoria >= 95 && contribuicao >= 35){
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você não pode se aposentar!`);
    }
    }  */