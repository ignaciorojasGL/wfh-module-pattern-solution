import { Person } from './person.js'

export const data = []


export const addNew = (name, age) => {
  const newPerson = Person(name, age)
  data.push(newPerson)
}

export const clearArr = () => {
  while(data.length > 0){
    data.pop()
  }
}

export const printData = () => {
  data.forEach((element) => {
    console.log(element)
  })
}
