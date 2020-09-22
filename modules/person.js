export function Person(name, age) {
  this.name = name;
  this.age = parseInt(age)
  
  if(this.age === null){
    this.age = 0
  }

  return {
    name, age
  }
}
