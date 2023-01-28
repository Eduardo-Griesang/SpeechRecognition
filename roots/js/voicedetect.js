window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const mesages = document.querySelector('#chute')

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

const write = document.querySelector('.voice-box')

recognition.onresult = (event) => {
    const voice = event.results[0][0].transcript
    exibechute(voice)
    verificaValidade(voice)
}

function exibechute(voice){
    mesages.innerHTML = `
    <div>Você disse:</div>
    <span class="voice-box">${voice}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
