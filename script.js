let btn = document.getElementById('btn')
let attempts = 1

btn.addEventListener('click', () => {
  event.preventDefault()
  document.addEventListener('keydown', event => {
    console.log(event)
  })

  console.log(attempts + ' tentativas')

  let inputNumber = Number(document.getElementById('input-number').value)

  let aleatoryNumber = Number(Math.round(Math.random() * 10))
  console.log('Número aleatório ' + aleatoryNumber)

  if (inputNumber == aleatoryNumber) {
    document.querySelector('.screen1').classList.add('hide')
    document.querySelector('.screen2').classList.remove('hide')
    document.querySelector(
      '.screen2 h2'
    ).innerText = `Acertou em ${attempts} tentativas.`
    attempts = 1
    document.getElementById('tryAgain').addEventListener('click', () => {
      document.querySelector('.screen1').classList.remove('hide')
      document.querySelector('.screen2').classList.add('hide')
    })
  }
  clearInput()

  function clearInput() {
    inputNumber = document.getElementById('input-number').value = ' '
  }

  attempts++
})
