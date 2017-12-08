// $(document).ready(function() {

// var pinkDisc = document.querySelector('#disc0')
// var purpleDisc = document.querySelector('#disc1')
// var blueDisc = document.querySelector('#disc2')

const towerLeft = []

const towerMid = []

const towerRight = []

const tempTower = []

let pinkDisc = document.querySelector('.disc0')
console.log(pinkDisc)
let purpleDisc = document.querySelector('.disc1')
console.log(purpleDisc)
let blueDisc = document.querySelector('.disc2')
console.log(blueDisc)

let leftTower = document.querySelector('.discs-left')
let middleTower = document.querySelector('.discs-mid')
let rightTower = document.querySelector('.discs-right')

towerLeft.push(pinkDisc, purpleDisc)
console.log(towerLeft)

leftTower.removeChild(pinkDisc)
rightTower.appendChild(pinkDisc)

leftTower.addEventListener("click", function(evt) {
  evt.preventDefault()
  
})




// })
