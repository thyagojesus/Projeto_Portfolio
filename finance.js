const Modal = {
        open() {
            document.querySelector('.modal-overlay').classList.add('active')
        },
        clouse() {
            document.querySelector('.modal-overlay').classList.remove('active')
        }
    }
    // o array transcations contem todas as transações
const transactions = [{
            id: 1,
            description: 'luz',
            amount: -50002,
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
            amount: 200001,
            date: '23/01/2021'
        }
    ]
    // Objeto responsavel por somar as entradas,saidas e valor total
const Transaction = {
    all: transactions,

    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
        console.log(Transaction.all)
    },
    remove(index) {
        Transaction.all.splice(index, 1)

        App.reload()
    },
    // o forEach um atributo disponivel nos arrays
    incomes() {
        let income = 0
            // para cada transação se o valor for maior que 0
        Transaction.all.forEach(transaction => {
            if (transaction.amount > 0) {
                income += transaction.amount
            }
        })
        return income
    },

    expenses() {
        let expense = 0
        Transaction.all.forEach(transaction => {
            if (transaction.amount < 0) {
                expense += transaction.amount
            }
        })

        return expense
    },

    total() {
        let total = 0
        let expense = Transaction.expenses()
        let income = Transaction.incomes()
        total = income + expense

        return total
    }
}

const DOM = {
    // busca a tabela
    transactionContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        // Cria elemento TR,
        const tr = document.createElement('tr')
            //adiciona um HTML na propriedade innerHTML
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
            // cria um elemento filho na tabela usando o appendChild recebendo o TR
        DOM.transactionContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        // valida o valor, e define se é entrada ou saida
        const CSSclass = transaction.amount > 0 ? 'income' : 'expense'
            // converte o valor em moeda
        const amount = Utils.formatCurrency(transaction.amount)
            // a const html recebe o HTML a ser adicionado
        const html = `
        
        
              <td class="description">${transaction.description}</td>
              <td class="${CSSclass}">   ${amount}</td>
              <td class="date">${transaction.date}</td>
              <td><img src="./image/assets/minus.svg" alt="" srcset="" /></td>
            
        `
        return html
    },
    // essa função é responsavel por atualizar visualmente os valores nos campos entradas, saidas e total
    updateBalance() {
        //busca a tag pelo ID, altera o HTML dela, convertendo o valor retornado da função para o formato de moeda.
        document.querySelector('#incomeDisplay').innerHTML = Utils.formatCurrency(
            Transaction.incomes()
        )
        document.querySelector('#expenseDisplay').innerHTML = Utils.formatCurrency(
            Transaction.expenses()
        )
        document.querySelector('#totalDisplay').innerHTML = Utils.formatCurrency(
            Transaction.total()
        )
    },
    clearTransactions() {
        DOM.transactionContainer.innerHTML = ''
    }
}

const Utils = {
    formatAmount(value) {
        value = Number(value) * 100
        return value
    },

    // função abaixo converte o valor recebido em moeda PT-br
    formatCurrency(value) {
        // guarda o sinal do valor recebido, validando se ele é negativo ou não
        const signal = Number(value) < 0 ? '-' : ''
            // transforma o valor em String para substituir/retirar qualquer valor que nao seja numerico
        value = String(value).replace(/\D/g, '')
            // value recebe o valor numerico dividido por 100, ja que retiramos todos os pontos e virgulas na linha acima
        value = Number(value) / 100
            //  linhas abaixo pega o valor e converte ele para moeda local, infomando o estilo moeda e qual tipo de moeda
        value = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        return signal + value
    },

    formatDate(date) {
        const splitedDate = date.split('-')

        date = `${splitedDate[2]}/ ${splitedDate[1]} / ${splitedDate[0]}`
        return date
    }
}

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValue() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    validateField() {
        console.log('validando os campos')
        const { description, amount, date } = Form.getValue()
        if (
            description.trim() === '' ||
            amount.trim() === '' ||
            date.trim() === ''
        ) {
            throw new Error('Por favor, preencha todos os campos')
        }
    },

    formatValues() {
        let { description, amount, date } = Form.getValue()
        amount = Utils.formatAmount(amount)
        date = Utils.formatDate(date)
        return { description, amount, date }
    },
    clearFields(event) {
        Form.description.value = ''
        Form.amount.value = ''
        Form.date.value = ''
    },

    submit(event) {
        event.preventDefault()
        try {
            Form.validateField()
            const transaction = Form.formatValues()
            Transaction.add(transaction)
            Form.clearFields()
            Modal.clouse()
            App.reload()
        } catch (error) {
            alert(error.message)
        }
    }
}
const App = {
    // inicializa a aplição
    init() {
        // para cada transação execute a função addTransaction
        Transaction.all.forEach(transcation => {
                DOM.addTransaction(transcation)
            })
            // atualize o balanço
        DOM.updateBalance()
    },
    // fazer um reload na tabela
    reload() {
        // chame a função para limpar o tabela
        DOM.clearTransactions()
            // inicie a aplicação novamente
        App.init()
    }
}
App.init()