const result = document.querySelector('#resultado')
const height = document.querySelector('#altura')
const weight = document.querySelector('#peso')

const calcIMC = () => {

  if (weight.value !== '' && height.value !== '') {
    const imc = (weight.value / (height.value * height.value)).toFixed(2)
    console.log(imc)
    result.innerHTML = `IMC: ${imc}`
  } else {
    result.innerHTML = 'Insira seu peso e altura.'
  }
}



