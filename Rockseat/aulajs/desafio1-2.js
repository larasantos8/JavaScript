// “Não basta saber, é preferível saber aplicar. Não é o bastante querer, é preciso saber querer.”

const usuario = {
    nome: 'Carlos',
    idade: 32,
    tecnologia: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ],
    empresa: {
        nome: 'Rockseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereco: {
            rua: 'Rua Guilherme Gembala',
            num: '260'
        }
    }
}

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologia[0].nome} com especialidade em ${usuario.tecnologia[0].especialidade}`);
console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua},${usuario.empresa.endereco.num}`);