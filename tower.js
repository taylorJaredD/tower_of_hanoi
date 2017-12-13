

const towerLeft = [3, 2, 1]
const towerMid = []
const towerRight = []

let sourceTower
let destTower

let hasClicked = false


// let clickedTower = document.querySelector('.discs')
let pinkDisc = document.querySelector('.disc1')
let purpleDisc = document.querySelector('.disc2')
let blueDisc = document.querySelector('.disc3')

let leftTower = document.querySelector('.discs-left')
let middleTower = document.querySelector('.discs-mid')
let rightTower = document.querySelector('.discs-right')

let sourceDomTower
let destDomTower

function registerClick (evt) {
  evt.preventDefault()
  // console.log(this)
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

function secondClick (element) {
  let dest = element.className
  console.log(dest)
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

function checkRules () {
  let currentDisc = sourceTower[sourceTower.length - 1]
  console.log(currentDisc)
  let topDestDisc = destTower[destTower.length - 1]
  console.log(topDestDisc)
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
    // sourceDomTower = source
    let tempDisc = sourceTower.pop()
    let tempDomDisc = document.querySelector(`.disc${tempDisc}`)
    sourceDomTower.removeChild(tempDomDisc)
    console.log(sourceTower)
    destTower.push(tempDisc)
    document.querySelector(`.disc${tempDisc}`)
    destDomTower.insertBefore(tempDomDisc, destDomTower.childNodes[0])
    console.log(destTower)
  }


leftTower.addEventListener("click", registerClick)

middleTower.addEventListener("click", registerClick)

rightTower.addEventListener("click", registerClick)
