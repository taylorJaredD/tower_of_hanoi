
// Create three arrays that will be used to keep track of the discs in the game logic.
// These will also be used to reference the discs when updating the DOM elements.
const towerLeft = [5, 4, 3, 2, 1]
const towerMid = []
const towerRight = []

// Temporary variables used to indicate the first and second clicks.
let sourceTower
let destTower

// A boolean to know if a click happened.
let hasClicked = false

// Variables to store the DOM elements.
let greenDisc = document.querySelector('.disc1')
let pinkDisc = document.querySelector('.disc2')
let orangeDisc = document.querySelector('.disc3')
let purpleDisc = document.querySelector('.disc4')
let blueDisc = document.querySelector('.disc5')

let leftTower = document.querySelector('.discs-left')
let middleTower = document.querySelector('.discs-mid')
let rightTower = document.querySelector('.discs-right')

// Temporary variables used when updating the disc DOM elements.
let sourceDomTower
let destDomTower

// Variable to keep track of how many moves the player has made.
let moveCounter = 0
let movesDom = document.querySelector('.moves')
movesDom.innerHTML = moveCounter


// A function to know if a click happened first or second.
function registerClick (evt) {
  evt.preventDefault()
  if (!hasClicked) {
    firstClick(this)
    hasClicked = true
  } else {
    secondClick(this)
    hasClicked = false
  }
}

// A function to know which of the towers were clicked first.
function firstClick (element) {
  let source = element.className
  if (source === "discs-left") {
    sourceTower = towerLeft
    sourceDomTower = leftTower
  } else if (source === "discs-mid") {
    sourceTower = towerMid
    sourceDomTower = middleTower
  } else if (source === "discs-right") {
    sourceTower = towerRight
    sourceDomTower = rightTower
  } else {
    console.alert("invalid tower clicked")
  }
}

// A function to know which of the towers were clicked second and if the move is allowed.
function secondClick (element) {
  let dest = element.className
  if (dest === "discs-left") {
    destTower = towerLeft
    destDomTower = leftTower
  } else if (dest === "discs-mid") {
    destTower = towerMid
    destDomTower = middleTower
  } else if (dest === "discs-right") {
    destTower = towerRight
    destDomTower = rightTower
  } else {
    console.alert("invalid tower clicked")
  }
  checkRules()
}

// A function to determine if a move is allowed or not.
function checkRules () {
  let currentDisc = sourceTower[sourceTower.length - 1]
  let topDestDisc = destTower[destTower.length - 1]
    if (currentDisc && destTower.length === 0) {
      doMove()
    } else if (currentDisc && topDestDisc && currentDisc < topDestDisc) {
      doMove()
    } else {
      console.log("move not allowed")
    }
}

// A function to perform the move and update the DOM elements.
function doMove () {
  let tempDisc = sourceTower.pop()
  let tempDomDisc = document.querySelector(`.disc${tempDisc}`)
  sourceDomTower.removeChild(tempDomDisc)
  destTower.push(tempDisc)
  document.querySelector(`.disc${tempDisc}`)
  destDomTower.insertBefore(tempDomDisc, destDomTower.childNodes[0])
  moveCounter++
  movesDom.innerHTML = moveCounter
  if (destTower.length === 5) {
    winCondition()
  }
}

// A function to check if the player has won and congratulate them.
function winCondition () {
  leftTower.removeEventListener("click", registerClick)
  middleTower.removeEventListener("click", registerClick)
  rightTower.removeEventListener("click", registerClick)
  let won = document.getElementById('win')
  won.style.visibility = "visible"
}

// A function to reset the game state to the initial values
function resetGame () {
  location.reload()
}

// Event listeners added to the towers.
leftTower.addEventListener("click", registerClick)
middleTower.addEventListener("click", registerClick)
rightTower.addEventListener("click", registerClick)
