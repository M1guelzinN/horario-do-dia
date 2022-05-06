let agora = new Date()
let hora = agora.getHours()
let MIN = new Date()
let min = MIN.getMinutes()

let mostrar = window.document.querySelector('div.hora')
    mostrar.innerHTML = `${hora}:${min}`

if(hora <= 5){
    
}