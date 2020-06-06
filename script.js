var resultado1
var resultado2
var resultado3
var resultado4

var numA
var numB
var numC
var numD

function numero() {
    var aleatorio = Math.random()
    var maximo = aleatorio * 100000
    var exatas = Math.floor(maximo)
    return exatas
}

function jogar1() {
    resultado1 = numero()
    alert(resultado1)

}

function jogar2() {
    resultado2 = numero()
    alert(resultado2)
}

function jogar3() {
    resultado3 = numero()
    alert(resultado3)
}

function jogar4() {
    resultado4 = numero()
    alert(resultado4)
}

function resposta1() {
    var inputNumA = document.getElementById("numA")
    numA = Number(inputNumA.value)
}

function resposta2() {
    var inputNumB = document.getElementById("numB")
    numB = Number(inputNumB.value)
}

function resposta3() {
    var inputNumC = document.getElementById("numC")
    numC = Number(inputNumC.value)
}

function resposta4() {
    var inputNumD = document.getElementById("numD")
    numD = Number(inputNumD.value)
}

function vitoria() {
    if (resultado1 === numA)
        alert('Player 1 acertou')
    else
        alert('Player 1 errou')
    if (resultado2 === numB)
        alert('Player 2 acertou')
    else
        alert('Player 2 errou')
    if (resultado3 === numC)
        alert('Player 3 acertou')
    else
        alert('Player 3 errou')
    if (resultado4 === numD)
        alert('Player 4 acertou')
    else
        alert('Player 4 errou')
}

function novoJogo() {

}