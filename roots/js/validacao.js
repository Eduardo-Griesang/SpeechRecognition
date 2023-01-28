function verificaValidade(voice) {
    const number = +voice
    
    if (invalidGuess(number)){
        mesages.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numberHigherOrLower(number)) {
        mesages.innerHTML += `<div>O número precisa estar entre ${minValue} e ${maxValue}</div>`
        return
    }

    if (number === secretNumber) { 
        document.body.innerHTML = `
        <h2 class="right-number">Você acertou!!!</h2>
        <h3 class="information">O número secreto era ${secretNumber}</h3>
        <div class="box-botao">
            <button id='jogar-novamente' class='botao jogar-novamente'>Jogar Novamente</button>
        </div>
        `
    } else if (number > secretNumber){
        mesages.innerHTML += `
        <div>O numero secreto é menor</div>
        `
    } else {
        mesages.innerHTML += `
        <div>O número secreto é maior</div>
        `
    }
}

function invalidGuess(number) {
    return Number.isNaN(number)
}

function numberHigherOrLower(number) {
    return number > maxValue || number < minValue
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})