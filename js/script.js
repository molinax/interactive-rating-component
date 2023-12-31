const card = document.querySelector('#card')
const cardSuccess = document.querySelector('#cardSuccess')

const buttons = document.querySelectorAll('.card__button')
const ratingUserNumber = document.querySelector('#ratingUserNumber')

let buttonElement = null
let valueButton = null

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttonElement = button
    const parentElement = button.parentElement
    const brothersElements = [...parentElement.children]
    
    brothersElements.forEach(brotherElement => brotherElement.classList.remove('active-button'))
    button.classList.add('active-button')

    valueButton = button.textContent
  })
})

document.querySelector('#submitElement').addEventListener('click', () => {
  if(valueButton != null) {
    cardSuccess.classList.toggle('toggle-card')
    card.classList.toggle('toggle-card')

    ratingUserNumber.innerText = valueButton
  }
})

document.querySelector('#buttonReturnElement').addEventListener('click', () => {
  cardSuccess.classList.toggle('toggle-card')
  card.classList.toggle('toggle-card')

  buttonElement.classList.remove('active-button')
  valueButton = null;
})

document.querySelector('#form').addEventListener('submit', (event) => {
  event.preventDefault()
})