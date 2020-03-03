const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === 'credit') {
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value; 
    }



    //transaction.type === 'credit' ? user.balance += transaction.value && user.transactions.push(transaction) : user.balance -= transaction.value && user.transactions.push(transaction);
}


function getHigherTransactionByType(typeTransaction) {
    higherValue = 0;


    for (let i = 0; i < user.transactions.length; i++) {
        if (typeTransaction === "credit" && user.transactions[i].type == typeTransaction) {

            if (higherValue < user.transactions[i].value) {
                higherValue = user.transactions[i].value;
                objectT = user.transactions[i];
            }

        } else if (typeTransaction === "debit" && user.transactions[i].type == typeTransaction) {
            if (higherValue < user.transactions[i].value) {
                higherValue = user.transactions[i].value;
                objectT = user.transactions[i];
            }
        }
    }

    console.log(objectT);
    
}

function getAverageTransactionValue() {
    sum = 0;

    for (let i = 0; i < user.transactions.length; i++) {

        sum += user.transactions[i].value;
    }

    const average = sum / user.transactions.length;

    console.log(average);
}

function getTransactionsCount() {
    transactionsCredit = 0;
    transactionsDebit = 0;

    for (let i = 0; i < user.transactions.length; i++) {
        user.transactions[i].type === 'credit' ? transactionsCredit++ : transactionsDebit++;

    }

    console.log(`Credit: ${transactionsCredit}, Debit: ${transactionsDebit}`);
}


createTransaction({
    type: "credit",
    value: 50
});
createTransaction({
    type: "credit",
    value: 120
});
createTransaction({
    type: "debit",
    value: 80
});
createTransaction({
    type: "debit",
    value: 30
});


getHigherTransactionByType("credit");
getHigherTransactionByType("debit");

getAverageTransactionValue();

getTransactionsCount();




/* Solução proposta:

    // Relatórios
function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for(let transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}

*/