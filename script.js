let date = new Date()
let high = date
let low  = new Date(0, 0, 1)
let size = 30
let n = 1

setDate()

function setDate(dir) {
  document.getElementById('date').innerText = dateString()
  
  const count = n + ' Tentativa' 
  document.getElementById('count').innerText = count  
}

function dateString() {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options).toString()
}
console.log(dateString())

function higher() {
  low = date
  update('higher')
}

function lower() {
  high = date
  update('lower')
}

function update(dir) {
  logDate(dir)
  guess()
  setDate(dir)
}

function guess() {
  const delta = high.getTime() - low.getTime()
  const error = delta * ((Math.random() / 2) - 0.25)
  const guess = low.getTime() + (delta / 2) + error
  
  date = new Date(guess)
  n++
  size--
}

function logDate(id) {
  const elem = getDateElement(dateString())
  
  if(id == 'lower') {
    document.getElementById('log-higher').append(elem)
    
  } else if(id == 'higher') {
    document.getElementById('log-lower').prepend(elem)
  }
}

function getDateElement(date) {
  let text = document.createTextNode(date)
  let elem = document.createElement('div')
  elem.appendChild(text)
  return elem
}