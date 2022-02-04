// Carne: 400gr por pessoa, se > 6 horas, calcular 650gr por pessoa
// Cerveja: 1200ml por pessoa. se > 6 horas, calculas 2000 ml por pessoa
// refrigentante: 1000ml por pessoa, se > 6 horas, 1500ml

let inputAdultos = document.querySelector('#adultos')
let inputCriancas = document.querySelector('#criancas')
let inputduracao = document.querySelector('#duracao')
let resultado = document.querySelector('#resultado')

console.log(inputAdultos, inputCriancas, inputduracao)

function limpar() {
    resultado.innerHTML = ''
    inputAdultos.value = ''
    inputduracao.value = ''
    inputCriancas.value = ''
}

function calcular() {
    resultado.innerHTML = ''
    let adultos = parseInt(inputAdultos.value)
    let criancas = parseInt(inputCriancas.value)
    let ducacao = parseFloat(inputduracao.value)
    if (!isNaN(adultos)) {
        if (ducacao < 6) {
            qtdTotalCarne = adultos * 400 + criancas * 200
            qtdTotalCerveja = adultos * 1200
            qtdTotalRefrigerante = adultos * 1000 + criancas * 500
        } else {
            qtdTotalCarne = adultos * 650 + criancas * 325
            qtdTotalCerveja = adultos * 2000
            qtdTotalRefrigerante = adultos * 1500 + criancas * 750
        }

        console.log(
            adultos,
            criancas,
            ducacao,
            qtdTotalCarne,
            qtdTotalCerveja,
            qtdTotalRefrigerante
        )
        resultado.innerHTML = ` <p> Quantidade de carne:${
      qtdTotalCarne / 1000
    } kg de carne</p>`
        resultado.innerHTML += ` <p> Quantidade de Cerveja:${
      qtdTotalCerveja / 1000
    } Lt de cerveja</p>`
        resultado.innerHTML += ` <p> Quantidade de Bebidas:${
      qtdTotalRefrigerante / 1000
    } Litro de bebidas</p>`
    } else {
        alert('valide os dados')
    }
}