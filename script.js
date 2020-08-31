var exatas

var jogadas = 0

var inputNumA = document.getElementById("numA")
var inputNumB = document.getElementById("numB")
var inputNumC = document.getElementById("numC")
var inputNumD = document.getElementById("numD")

var responder1 = 0
var responder2 = 0
var responder3 = 0
var responder4 = 0
var todosResponderam = 0

var resultado1
var resultado2
var resultado3
var resultado4

var numA
var numB
var numC
var numD

novoJogo()

function numero() {
    var aleatorio = Math.random()
    var maximo = aleatorio * 100000
    var exatas = Math.floor(maximo)
    return exatas
}

function começar() {
    qualJogador()
    if (exatas === 0 && responder1 === 0) {
        var um = document.getElementById('um')
        um.disabled = false
        responder1 = 1
        jogadas = jogadas + 1
        todosResponderam = todosResponderam + 1
        inputNumA.disabled = false
    } else if (exatas === 1 && responder2 === 0) {
        var dois = document.getElementById('dois')
        dois.disabled = false
        responder2 = 1
        jogadas = jogadas + 1
        todosResponderam = todosResponderam + 1
        inputNumB.disabled = false
    }
    else if (exatas === 2 && responder3 === 0) {
        var tres = document.getElementById('tres')
        tres.disabled = false
        responder3 = 1
        jogadas = jogadas + 1
        todosResponderam = todosResponderam + 1
        inputNumC.disabled = false
    }
    else if (exatas === 3 && responder4 === 0) {
        var quatro = document.getElementById('quatro')
        quatro.disabled = false
        responder4 = 1
        jogadas = jogadas + 1
        todosResponderam = todosResponderam + 1
        inputNumD.disabled = false
    } else if (todosResponderam !== 4) {
        começar()
    } else {
        jogadas = jogadas + 1
    }

}

function qualJogador() {
    var aleatorio = Math.random()
    var maximo = aleatorio * 4
    exatas = Math.floor(maximo)
    return exatas
}

function jogar1(player) {
    resultado1 = numero()
    alert(resultado1)
    player.disabled = true
}

function jogar2(player) {
    resultado2 = numero()
    alert(resultado2)
    player.disabled = true
}

function jogar3(player) {
    resultado3 = numero()
    alert(resultado3)
    player.disabled = true
}

function jogar4(player) {
    resultado4 = numero()
    alert(resultado4)
    player.disabled = true
}

function resposta1() {
    var inputNumA = document.getElementById("numA")
    numA = Number(inputNumA.value)
    inputNumA.disabled = true
    começar()
    vitoria()
}

function resposta2() {
    var inputNumB = document.getElementById("numB")
    numB = Number(inputNumB.value)
    inputNumB.disabled = true
    começar()
    vitoria()
}

function resposta3() {
    var inputNumC = document.getElementById("numC")
    numC = Number(inputNumC.value)
    inputNumC.disabled = true
    começar()
    vitoria()
}

function resposta4() {
    var inputNumD = document.getElementById("numD")
    numD = Number(inputNumD.value)
    inputNumD.disabled = true
    começar()
    vitoria()
}

function vitoria() {
    if (jogadas === 5) {
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
}

function novoJogo() {
    inputNumA.disabled = true
    inputNumB.disabled = true
    inputNumC.disabled = true
    inputNumD.disabled = true

    numA = ''
    numB = ''
    numC = ''
    numD = ''

    var um = document.getElementById('um')
    um.disabled = true
    var dois = document.getElementById('dois')
    dois.disabled = true
    var tres = document.getElementById('tres')
    tres.disabled = true
    var quatro = document.getElementById('quatro')
    quatro.disabled = true
}