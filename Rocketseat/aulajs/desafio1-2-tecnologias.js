// “Quer você acredite que consiga fazer uma coisa ou não, você está certo.”

const users = [{
        name: "Carlos",
        tech: ["HTML", "CSS"]
    },

    {
        name: "Jasmine",
        tech: ["JavaScript", "CSS"]
    },

    {
        name: "Tuane",
        tech: ["HTML", "Node.js"]
    }
];

for (let user of users) {
    console.log(`${user.name} works with ${user.tech[0]}, ${user.tech[1]}`);
}

function checkUserUseCSS(user) {
    user.work = false; //um boolean sempre espera algum retorno

    for (let i = 0; i < user.tech.length; i++) {
        if (user.tech[i] === "CSS") {
            user.work = true;
            return true;
        }
    }
    return false;
}

function sendMessage(user) {
    for (let i = 0; i < users.length; i++) {
        const userWorksCSS = checkUserUseCSS(user[i]);

        if (userWorksCSS) {
            console.log(`The user ${user[i].name} works with CSS!`);
        }
    }
}


sendMessage(users);


/*
Solução Proposta:

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
*/