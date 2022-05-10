let agora = new Date()
let hora = agora.getHours()
let MIN = new Date()
let min = MIN.getMinutes()

let relogio = window.document.querySelector('.hora')
    relogio.innerHTML = `${hora}:${min}`
 
let comp = document.querySelector('.comprimentar')
let Img = document.querySelector('.bg-img')
    
let formUp = document.querySelector('.forma-up')     // forma de cima 
let formDown = document.querySelector('.forma-down')  // forma embaixo


    // horário do .getHours
if(hora <= 5){
    comp.innerHTML = 'Está de madrugada'
    Img.style.backgroundImage = "url('itens/img/madrugada.jpg')"

    formUp.style.background = 'rgb(19, 32, 54)'
    formDown.style.background = 'rgb(19, 32, 54)'
} 
else if(hora <= 11){
    comp.innerHTML = 'Bom dia'
    Img.style.backgroundImage = "url('itens/img/bom-dia.jpg')"
    
    formUp.style.background = 'rgb(0, 197, 197'
    formDown.style.background = 'rgb(0, 197, 197)'
} 
else if(hora <= 17){
    comp.innerHTML = 'Boa tarde'
    Img.style.backgroundImage = "url('itens/img/boa-tarde.jpg')"

    formUp.style.background = 'rgb(239, 101, 0)'
    formDown.style.background = 'rgb(239, 101, 0)'
} 
else if(hora <= 23){
    comp.innerHTML = 'Boa noite'
    Img.style.backgroundImage = "url('itens/img/boa-noite.jpg')"

    formUp.style.background = 'rgb(59, 62, 104)'
    formDown.style.background = 'rgb(59, 62, 104)'
}

// Valor digitado  pelo usuário
function horaDigitada(){
    let inputHora = document.querySelector('#inph')
    let inputMin = document.querySelector('#inpm')

    let valorDeHora = Number(inputHora.value)
    let valorDeMin = Number(inputMin.value)

    relogio.innerHTML = `${valorDeHora}:${valorDeMin}`
    
if(valorDeHora < 0 || valorDeHora > 23 || valorDeMin < 0 || valorDeMin > 59){
    relogio.innerHTML = "Invalido"
    inputHora.value = ''
    inputMin.value = ''
        return alert('O horário não existe')
}
else if(valorDeHora <= 5){
    comp.innerHTML = 'Está de madrugada'
    Img.style.backgroundImage = "url('itens/img/madrugada.jpg')"

    formUp.style.background = 'rgb(19, 32, 54)'
    formDown.style.background = 'rgb(19, 32, 54)'
}
else if(valorDeHora <= 11){
    comp.innerHTML = 'Bom dia'
    Img.style.backgroundImage = "url('itens/img/bom-dia.jpg')"
    formUp.style.background = 'rgb(0, 197, 197'
    formDown.style.background = 'rgb(0, 197, 197)'
    
}
else if(valorDeHora <= 17){
    comp.innerHTML = 'Boa tarde'
    Img.style.backgroundImage = "url('itens/img/boa-tarde.jpg')"

    formUp.style.background = 'rgb(239, 101, 0)'
    formDown.style.background = 'rgb(239, 101, 0)'
}
else if(valorDeHora <= 23){
    comp.innerHTML = 'Boa noite'
    Img.style.backgroundImage = "url('itens/img/boa-noite.jpg')"

    formUp.style.background = 'rgb(59, 62, 104)'
    formDown.style.background = 'rgb(59, 62, 104)'
}
    inputHora.value = ''
    inputMin.value = ''
}// fim da function