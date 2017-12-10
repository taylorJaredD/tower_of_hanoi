// $(document).ready(function() {

// var pinkDisc = document.querySelector('#disc0')
// var purpleDisc = document.querySelector('#disc1')
// var blueDisc = document.querySelector('#disc2')

const towerLeft = []
const towerMid = []
const towerRight = []
const tempTower = []
let clickedTower = document.querySelector('.discs')
let pinkDisc = document.querySelector('.disc0')
let purpleDisc = document.querySelector('.disc1')
let blueDisc = document.querySelector('.disc2')

let leftTower = document.querySelector('.discs-left')
let middleTower = document.querySelector('.discs-mid')
let rightTower = document.querySelector('.discs-right')

towerLeft.push(pinkDisc, purpleDisc, blueDisc)
console.log(towerLeft)

// leftTower.removeChild(pinkDisc)
// rightTower.appendChild(pinkDisc)
// clickedTower.addEventListener("click", function(evt) {
//   evt.preventDefault()
// })
leftTower.addEventListener("click", function(evt) {
  evt.preventDefault()
  // clicked()
  firstClick()
  secondClick()
})

middleTower.addEventListener("click", function(evt) {
  evt.preventDefault()
  // clicked()
})

rightTower.addEventListener("click", function(evt) {
  evt.preventDefault()
  // clicked()
})

function firstClick() {
  let holder = towerLeft.pop()
  console.log(holder)
  leftTower.removeChild(pinkDisc)
  holder = tempTower.push()
  console.log(holder)
}

function secondClick() {
  let holder = tempTower.pop()
  console.log(tempTower)
  let targetTower = towerRight.push()
  console.log(targetTower)
  rightTower.appendChild(pinkDisc)
}

// function clicked() {
//   if (clickedTower === leftTower) {
//     tempTower.pop()
//     leftTower.push()
//   } else if (clickedTower === middleTower) {
//     tempTower.pop()
//     middleTower.push()
//   } else if (clickedTower === rightTower) {
//     tempTower.pop()
//     rightTower.push()
//   }
// // else {
// //   invalidMove
// // }
// }
// })
