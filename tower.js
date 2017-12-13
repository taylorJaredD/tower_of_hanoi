

const towerLeft = []
const towerMid = [3, 2, 1]
const towerRight = []

let sourceTower
let destTower

let hasClicked = false


// let clickedTower = document.querySelector('.discs')
// let pinkDisc = document.querySelector('.disc0')
// let purpleDisc = document.querySelector('.disc1')
// let blueDisc = document.querySelector('.disc2')
//
let leftTower = document.querySelector('.discs-left')
let middleTower = document.querySelector('.discs-mid')
let rightTower = document.querySelector('.discs-right')

function registerClick (evt) {
  evt.preventDefault()
  // console.log(this)
  // clicked()
  if (!hasClicked) {
    // console.log('first click')
    firstClick(this)
    hasClicked = true
  } else {
    // console.log('second click')
    secondClick(this)
    hasClicked = false
  }
}

function firstClick (element) {
  let source = element.className
  if (source === "discs-left") {
    sourceTower = towerLeft
  } else if (source === "discs-mid") {
    sourceTower = towerMid
  } else if (source === "discs-right") {
    sourceTower = towerRight
  } else {
    console.alert("invalid tower clicked")
  }
}

function secondClick (element) {
  let dest = element.className
  console.log(dest)
  if (dest === "discs-left") {
    destTower = towerLeft
  } else if (dest === "discs-mid") {
    destTower = towerMid
  } else if (dest === "discs-right") {
    destTower = towerRight
  } else {
    console.alert("invalid tower clicked")
  }
  checkRules()
}

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

  function doMove () {
    console.log("moving discs")
  }




leftTower.addEventListener("click", registerClick)

middleTower.addEventListener("click", registerClick)

rightTower.addEventListener("click", registerClick)
