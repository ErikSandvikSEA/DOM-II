// variables
const get = selector => {
     return document.querySelector(selector)
}
const navContainer = get('.nav-container')
const welcomeP = get('.intro p')
const pTags = document.querySelectorAll('p')
const busPic = get('.intro img')
const mapPic = get('.img-content img')
const inverseContent = get('.inverse-content')
const newP = document.createElement('p')
inverseContent.appendChild(newP)
newP.setAttribute('class', "disappear")
newP.setAttribute('font-size', '300%')
newP.textContent = 'GREETINGS!'
const boatPic = get('.content-destination img')

const newA = document.createElement('a')
navContainer.prepend(newA)
newA.textContent = 'DO NOT TOUCH'

const footer = get('footer')

// functions
function addYellow () {
     // console.log('yellow')
     navContainer.classList.toggle('yellowBackgroundColor')
}

function makeBold (){
     // console.log('bold')
     welcomeP.classList.toggle('bold-font')
}
     
function shrinkBus () {
     busPic.classList.toggle('shrinkClass')
}

function shakePic (event) {
event.preventDefault()
     mapPic.classList.toggle('shakeClass')
}

function surprise (){
     // console.log('greeting')
     newP.classList.remove('disappear')
     newP.style.fontSize = 150;
}
// console.log(pTags)

pTags.forEach(pTag => {
    pTag.addEventListener('mouseover', function (e) {
     // console.log('working')
     e.target.style.fontStyle = 'italic'
})
     })

     pTags.forEach(pTag => {
          pTag.addEventListener('mouseout', function (e) {
           // console.log('working')
           e.target.style.fontWeight = 'bold'      })
           })
function flipBoat (e){
    if(e.key === 'ArrowRight') {
     boatPic.classList.add('flip-box')
     boatPic.classList.add('flip-box-inner')
}
}

function viewHeight(){
     footer.classList.add('bigTall')
}

function youTouched () {
     alert('I CANNOT BELIEVE YOU TOUCHED')
}

function changeText (e) {
     e.target.textContent = "YOU HAVE SELECTED ME"
}

//event listeners
navContainer.addEventListener('dblclick', addYellow)

welcomeP.addEventListener('mouseover', makeBold)

busPic.addEventListener('click', shrinkBus)

mapPic.addEventListener('wheel', shakePic)

newP.addEventListener('mousemove', surprise)

document.addEventListener('keydown', flipBoat)

footer.addEventListener('dblclick', viewHeight)

newA.addEventListener('mouseenter', youTouched)

newP.addEventListener('mouseout', function() {
     alert( "YOU HAVE ABANDONED ME")
})