// Objetos é uma coleção de proriedades que recebem valores ou funcionalidades (ex: objetos de students)
// let permite que o valor de i seja alterado diferente de const


// Programa que calcula a média
// das grades das turmas de students
// envia mensagem no cálculo da média.

const classA = [{
        name: "Lara",
        grade: 10
    },
    {
        name: "Gabriel",
        grade: 1
    },
    {
        name: "Andressa",
        grade: 10
    }
]

const classB = [{
        name: "Vitor",
        grade: 5
    },
    {
        name: "Vanessa",
        grade: 5
    },
    {
        name: "Gustavo",
        grade: 5
    }
]

function calculateAverage(students) { 
    let sum = 0;
    
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade;
    }

    const average = sum / students.length;
    
    return average;
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

function sendMessage(average, team) {
    if (average > 5) {
        console.log(`${team} average: ${average}. Congratulations!!`);
    } else {
        console.log(`${team} average: ${average}... disappointed but not surprised :)`);
    }
}

function markAsFlunked(student) {
    student.flunked = false;
    
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} was flunked!`);
    }
}

function studentsFlunkeds(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendMessageflunked(student);
    }

}

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsFlunkeds(classA);
studentsFlunkeds(classB);
