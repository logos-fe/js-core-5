// Array methods

const users = [
  {
    id: 0,
    name: 'Andrii',
    years: 21,
  },
  {
    id: 1,
    name: 'Nazar',
    years: 20,
  },
  {
    id: 2,
    name: 'Olena',
    years: 15,
  },
  {
    id: 3,
    name: 'Yana',
    years: 25,
  },
]

// forEach((item, index, array) => {}) - перебір масиву
// for (let i = 0; i < users.length; i++) {
//   console.log(`My name is ${users[i].name}, I'm ${users[i].years} years old`)
// }

// users.forEach((elem, i, arr) => {
//   console.log(`My name is ${elem.name}, I'm ${elem.years} years old. My index: ${i}`)
// })

// map((item, index, array) => {}) - повертає новий змінений масив

// const newUsersList = users.map((item) => {
//   if (item.years > 18) {
//     item.adult = true
//   } else {
//     item.adult = false
//   }
//
//   return item
// })
// console.log('newUsersList', newUsersList, users)

// filter((item, index, arr) => {}) - фільтрує масив
// const filteredArray = users.filter((item) => item.years < 21)
//
// const oddsArray = users.filter((item, index) => {
//   return index % 2 !== 0
// })
// console.log(oddsArray)

// find((item, index, arr) => {}) - шукає потрібний елемент в масиві
// const selectedUser = users.find((item, index) => {
//   return item.id === 2 && index % 2 === 0 && item.years > 18
// })

// console.log(selectedUser)

// findIndex((item, index, arr) => {})
// const selectedIndex = users.findIndex((item) => item.years === 27)
// console.log(selectedIndex)

// some((item, index, arr) => {}) - шукає перше співпадіння в масиві, повертає true/false
// const hasChildren = users.some((item) => item.name[0] === "O")
// console.log(hasChildren)

// every((item, index, arr) => {}) - провіряє кожен елемент масиву на умову, повертає true/false
// const adults = users.every((item) => item.years < 30 && item.years >= 15)
// console.log(adults)

// sort((a, b) => {}) - сортує масив по певній умові
// const numbers = [12, 1, 45, 34, 90, 65, 87]
// const sortedNumbers = numbers.sort((a, b) => a - b)
// const sortedArray = users.sort((a, b) => a.years - b.years) // сортує від меншого до більшого
// console.log(sortedArray)

// reduce((total, item, index, arr) => {}, initialValue)
// const sumOfAges = users.reduce((total, cur) => {
//   return total + cur.years
// }, 0)

// 1. total = 0, years = 21 => 0 + 21 = 21
// 2. total = 21, years = 20 => 21 + 20 = 41
// 3. total = 41, years = 15 => 41 + 15 = 56
// 4. total = 56, years = 25 => 56 + 25 = 81

// 'Name1, Name2, Name3, Name4!'
// const allNames = users.reduce((total, cur, index, arr) => {
//   if (index === arr.length - 1) {
//     return total + `${cur.name}!`
//   }
//   return total + `${cur.name}, `
// }, 'All users: ')

// const allData = users.reduce((total, item, index, arr) => {
//   if (index === arr.length - 1) {
//     total.allNames += `${item.name}!`
//   } else {
//     total.allNames += `${item.name}, `
//   }
//   total.allYears += item.years
//
//   return total
// }, { allNames: '', allYears: 0 })
//
// console.log(allData)

// const user = {
//   id: 0,
//   name: 'Khrystyna',
//   age: 21,
//   city: 'Lviv',
//   sex: 'female',
// }

// Object.keys() - отримаємо всі ключі з об`єкта
// console.log(Object.keys(user))

// Object.values() - отримаємо всі значення з об`єкта
// console.log(Object.values(user))

// Object.entries() - отримаємо масив із ключ-значення
// console.log(Object.entries(user))





