const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]

const makeGreen = () => {
  const p = document.querySelector('p')
  p.style.color = '#BADA55'
  p.style.fontSize = '50px'
}


// Regular

console.log("hello")

// Interpolated

console.log('Hello I am a %s string', '💩')

// Styled

// %c in front of the thing that you want to style, second argument is how you want to edit 

console.log("%c Hello I am some great text", 'font-size: 40px; background-color: lime;')

// warning!

console.warn('OHHH NOO')

// Error :|

console.error("This is a Error!")

// Info

console.info("This is the info")

// Testing

// console.assert(1 === 2, "This is wrong")

const para = document.querySelector('p')
console.assert(para.classList.contains('Ouch!'), 'That is wrong')

// clearing

console.clear()

// Viewing DOM Elements

console.log(para)
// console.dir allows you to take a look at the properties of the element
console.dir(para)

// Grouping together

// Groups Snickers and then groups Hugo

dogs.map((dog) => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old`)
  console.groupEnd(`${dog.name}`)

})

// counting

console.count('Robert')
console.count('Robert')
console.count('Joe')
console.count('Robert')


// timing

console.time('Fetching data')
fetch('https://api.github.com/users/Richie1136')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('Fetching data')
    console.log(data)
  })


// Table

// Displays a nice table when you have an array of objects with the same properties

console.table(dogs)