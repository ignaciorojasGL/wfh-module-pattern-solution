const localStorageKey = 'data'

export const saveOnLocalStorage = (data) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data))
}

export const loadFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(localStorageKey) || '[]')
}
