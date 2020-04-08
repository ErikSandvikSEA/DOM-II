function get (selector) {
     document.querySelector(selector)
}
const blocks = document.querySelectorAll('.block')
const redBlock = document.querySelector('div.block--red')
const blueBlock = document.querySelector('div.block--blue')
const greenBlock = document.querySelector('div.block--green')
const pinkBlock = document.querySelector('div.block--pink')
const grayBlock = document.querySelector('div.block--gray')

function addPositioningClass (element) {
     element.classList.add('positioning')
}
addPositioningClass(redBlock)
addPositioningClass(blueBlock)
addPositioningClass(greenBlock)
addPositioningClass(pinkBlock)
addPositioningClass(grayBlock)

console.log(blocks)

// let x = 0;
// let y = 0;

let moveRight = (block) => {
     let x = 0;
     block.addEventListener('mousedown', function (){  
          block.setAttribute('style', `--x: ${ x }px`)
          return x += 20
})
}

moveRight(redBlock)
moveRight(blueBlock)
moveRight(greenBlock)
moveRight(pinkBlock)
moveRight(grayBlock)



//set block to index 0
//add 1 to index of all the others