/*===========================================
    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a   
    ==      Igual a
    ===     Igual e do mesmo tipo
    !=      Diferente de
    !==     Diferente, inclusive do tipo

============================================*/ 

//DESAFIO 1
const idade = 17;
 
// Verificar se a pessoa é maior de 18 anos
    if(idade >= 18){ //se sim, deixar entrar
        console.log("Pode entrar!");
    } else {
        console.log("Não pode entrar!"); //se não, bloquear a entrada
    }

    if (idade === 17){ //se a pessoa tiver 17 anos avisar para voltar quando fizer 18 anos
        console.log("Volte quando fizer 18 anos!"); 
    }


/*================================================
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras
        para que condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira 
        para que a condição final seja verdade.
    !   "NÃO" Nega uma condição.
    
=================================================*/ 

idade = 18;

if(!(idade >= 18) || idade == 17){ 
    console.log("Não pode entrar!"); 
} else {
    console.log("Pode entrar!");
} 


/*================================
    OPERADORES ARITMÉTICOS

    + Adição
    - Subtração
    * Multiplicação
    / Divisão
    % Resto da divisão
    
==================================*/ 

