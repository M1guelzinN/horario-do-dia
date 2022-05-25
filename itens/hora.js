function getData(){
let hora = new Date().getHours()
let min = new Date().getMinutes()

let relogio = window.document.querySelector('.hora')
    relogio.innerHTML = `${hora}:${min}`
 
let comp = document.querySelector('.comprimentar')
let Img = document.querySelector('.bg-img')
    
let formUp = document.querySelector('.forma-up')     // forma de cima 
let formDown = document.querySelector('.forma-down')  // forma embaixo

    if(hora <= 5){
        comp.innerHTML = 'Está de madrugada'
        Img.style.backgroundImage = "url('itens/img/madrugada.jpg')"

        formUp.style.background = 'rgb(20, 15, 64)'
        formDown.style.background = 'rgb(20, 15, 64)'
    } 
    else if(hora <= 11){
        comp.innerHTML = 'Bom dia'
        Img.style.backgroundImage = "url('itens/img/bom-dia.jpg')"
        
        formUp.style.background =   'rgb(0, 157, 63)'
        formDown.style.background = 'rgb(0, 157, 63)'
    } 
    else if(hora <= 17){
        comp.innerHTML = 'Boa tarde'
        Img.style.backgroundImage = "url('itens/img/boa-tarde.jpg')"

        formUp.style.background = 'rgb(210, 86, 11)'
        formDown.style.background = 'rgb(210, 86, 11)'
    } 
    else if(hora <= 23){
        comp.innerHTML = 'Boa noite'
        Img.style.backgroundImage = "url('itens/img/boa-noite.jpg')"

        formUp.style.background = 'rgb(76, 43, 91)'
        formDown.style.background = 'rgb(76, 43, 91)'
    }
} getData()

// Valor digitado  pelo usuário
function horaDigitada(){

    
let comp = document.querySelector('.comprimentar')
let Img = document.querySelector('.bg-img')

let formUp = document.querySelector('.forma-up')    
let formDown = document.querySelector('.forma-down')

let inputHora = document.querySelector('#inph')
let inputMin = document.querySelector('#inpm')
let valorDeHora = Number(inputHora.value)
let valorDeMin = Number(inputMin.value)

let relogio = window.document.querySelector('.hora')
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

        formUp.style.background = 'rgb(20, 15, 64)'
        formDown.style.background = 'rgb(20, 15, 64)'
    }
    else if(valorDeHora <= 11){
        comp.innerHTML = 'Bom dia'
        Img.style.backgroundImage = "url('itens/img/bom-dia.jpg')"

        formUp.style.background =   'rgb(0, 157, 63)'
        formDown.style.background = 'rgb(0, 157, 63)'
    }
    else if(valorDeHora <= 17){
        comp.innerHTML = 'Boa tarde'
        Img.style.backgroundImage = "url('itens/img/boa-tarde.jpg')"

        formUp.style.background = 'rgb(210, 86, 11)'
        formDown.style.background = 'rgb(210, 86, 11)'
    }
    else if(valorDeHora <= 23){
        comp.innerHTML = 'Boa noite'
        Img.style.backgroundImage = "url('itens/img/boa-noite.jpg')"

        formUp.style.background = 'rgb(56, 43, 91)'
        formDown.style.background = 'rgb(56, 43, 91)'
    }

    inputHora.value = ''
    inputMin.value = ''
} 

