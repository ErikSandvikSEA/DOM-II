function get (selector) {
     document.querySelector(selector)
}
const blocks = document.querySelectorAll('.block')
const redBlock = document.querySelector('div.block--red')
const blueBlock = document.querySelector('div.block--blue')
const greenBlock = document.querySelector('div.block--green')
const pinkBlock = document.querySelector('div.block--pink')
const grayBlock = document.querySelector('div.block--gray')

console.log(blocks)

let x = 0;
let y = 0;

blocks.forEach((block) => {
     block.addEventListener('click', function (){  
          block.setAttribute('style', `--x: ${ x }px`)
          return x += 10
})
})
