const nameInput = document.querySelector('#name-input')
const ageInput = document.querySelector('#age-input')

const btnClear = document.querySelector('#btn-clear')
const btnSave = document.querySelector('#btn-save')
const btnShow = document.querySelector('#btn-show')
const btnSaveLocalStorage = document.querySelector('#btn-save-ls')
const btnLoadLocalStorage = document.querySelector('#btn-load-ls')

const clearInputs = () => {
  nameInput.value = ''
  ageInput.value = ''
}

export {
  btnClear,
  btnSave,
  btnShow,
  btnSaveLocalStorage,
  btnLoadLocalStorage,
  clearInputs
}