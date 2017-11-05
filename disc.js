$(document).ready(function() {

function allowDrop (ev) {
  ev.preventDefault()
}

function drag (ev) {
  ev.dataTransfer.setData("text", ev.target.id)
}

function drop (ev) {
  var data = ev.dataTransfer.getData("text")
  ev.target.appendChild(document.querySelector(disc))
  ev.preventDefault()
}

window.onload = function() {
  var dragged = document.querySelector(".disc")
  var dropHere = document.querySelector(".tower")
  dragged.ondragstart = drag
  dropHere.ondragover = allowDrop
  dropHere.ondrop = drop
}


})
