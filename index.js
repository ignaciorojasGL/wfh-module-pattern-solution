import {data, addNew, clearArr, printData } from './modules/storage.js'
import { saveOnLocalStorage, loadFromLocalStorage } from './modules/persistence.js'
import { btnClear, btnSave, btnShow, btnSaveLocalStorage, btnLoadLocalStorage, clearInputs } from './modules/view.js'


// Events
btnClear.addEventListener('click', function(){
  clearArr()
});

btnSave.addEventListener('click', function(){
  addNew(nameInput.value, ageInput.value)
  clearInputs()
});

btnShow.addEventListener('click', function(){
  printData()
});

btnSaveLocalStorage.addEventListener('click', function(){
  saveOnLocalStorage(data)
});

btnLoadLocalStorage.addEventListener('click', function(){
  loadFromLocalStorage().forEach(element => {
    addNew(element.name, element.age)
  })
});



