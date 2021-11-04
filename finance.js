const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },
    clouse() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses() {
        // somar as saidas
    },
    total() {
        // entradas - saidas
    }
}

const transactions = [{
        id: 1,
        description: 'luz',
        amount: -50000,
        date: '23/01/2022'
    },
    {
        id: 2,
        description: 'Criação de web',
        amount: 500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'internet',
        amount: -20000,
        date: '23/01/2021'
    },
    {
        id: 4,
        description: 'app',
        amount: 200000,
        date: '23/01/2021'
    }
]

const DOM = {
    transactionContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        this.transactionContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? 'income' : 'expense'
        const html = `
        
        
              <td class="description">${transaction.description}</td>
              <td class="${CSSclass}">- ${transaction.amount}</td>
              <td class="date">${transaction.date}</td>
              <td><img src="./image/assets/minus.svg" alt="" srcset="" /></td>
            
        `
        return html
    }
}
transactions.forEach(function(transcation) {
    DOM.addTransaction(transcation)
})

const Utils = {
    formatCurrency(value) {
        const sinal = Number(value) < 0 ? '-' : ''

        value.String(value)
        console.log(sinal)
    }
}