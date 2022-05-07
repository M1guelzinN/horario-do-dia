let agora = new Date()
let hora = agora.getHours()
let MIN = new Date()
let min = MIN.getMinutes()

let mostrar = window.document.querySelector('div.hora')
    mostrar.innerHTML = `${hora}:${min}`

if(hora >= 5){
}

function mudar(){
    let puxad = document.querySelector('#inph')
    let puxad1 = document.querySelector('#inpm')
    let valorDeH = Number(puxad.value)
    let valorDeM = Number(puxad1.value)

    let saudac = document.querySelector('.cortesia')
    let bg = document.querySelector('.bg-img')
    
    let colorbg = document.querySelector('.forma-up')
    let colorbg1 = document.querySelector('.forma-down')

    mostrar.innerHTML = `${valorDeH}:${valorDeM}`
    
    if(valorDeH < 0 || valorDeH > 23 || valorDeM < 0 || valorDeM > 59){
        alert('O horário não existe')
    }
    else if(valorDeH <= 5){
        saudac.innerHTML = 'Está de madrugada'
        bg.style.backgroundImage = "url('../itens/img/madrugada.jpg')"

        colorbg.style.background = 'rgb(19, 32, 54)'
        colorbg1.style.background = 'rgb(19, 32, 54)'
    }
    else if(valorDeH <= 11){
        saudac.innerHTML = 'Bom dia'
        bg.style.backgroundImage = "url('itens/img/bom-dia.jpg')"
        colorbg.style.background = 'rgb(0, 197, 197'
        colorbg1.style.background = 'rgb(0, 197, 197)'
        
    }
    else if(valorDeH <= 17){
        saudac.innerHTML = 'Boa tarde'
        bg.style.backgroundImage = "url('itens/img/boa-tarde.jpg')"

        colorbg.style.background = 'rgb(239, 101, 0)'
        colorbg1.style.background = 'rgb(239, 101, 0)'
    }
    else if(valorDeH <= 23){
        saudac.innerHTML = 'Boa noite'
        bg.style.backgroundImage = "url('itens/img/boa-noite.jpg')"

        colorbg.style.background = 'rgb(59, 62, 104)'
        colorbg1.style.background = 'rgb(59, 62, 104)'
    }
}