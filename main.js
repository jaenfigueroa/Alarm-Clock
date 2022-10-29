let horero = document.getElementById('hora')
let minutero = document.getElementById('minuto')
let segundero = document.getElementById('segundo')

let horas = 12
let minutos = 60
let segundos = 60

setInterval(() => {
  let fecha = new Date()

  let hora = fecha.getHours()
  let minuto = fecha.getMinutes()
  let segundo = fecha.getSeconds()

  horero.style.transform = `rotate(${(360 * hora) / horas}deg)`;
  minutero.style.transform = `rotate(${(360 * minuto) / minutos}deg)`;
  segundero.style.transform = `rotate(${(360 * segundo) / segundos}deg)`;

}, 1000);

