$(document).ready(function() {

var hanoiGame = {
    disc_height: 20,
    col_pos: ["112px", "245px", "378px"],
    top: "180px",
    ordered_list: $('ol'),

    list_items: [],
    list_html: '',
    columns: [0, 0, 0],
    move_from: [],
    move_to: [],
    disc_order: [],
    animate_count: 0
}
function update_move_from_array (disc) {
  if (disc == 'left-tower') {
    disc = 0
  } else if (disc == 'mid-tower') {
    disc = 1
  } else if (disc == 'right-tower') {
    disc = 2
  }
  hanoiGame.move_from.push(disc)
}
function update_move_to_array (disc) {
  if (disc == 'left-tower') {
    disc = 0
  } else if (disc == 'mid-tower') {
    disc = 1
  } else if (disc == 'right-tower') {
    disc = 2
  }
  hanoiGame.move_to.push(disc)
}
function hanoi(disc, src, hlp, goal) {
  if (disc > 0) {
    hanoi(disc - 1, src, goal, hlp)
    hanoiGame.list_items.push('<li>Move disc ' + disc + ' from ' + src + ' to ' + goal + '</li>')
    update_move_from_array(src)
    update_move_to_array(goal)
    hanoiGame.disc_order.push(disc - 1)
    hanoi(disc - 1, hlp, src, goal)
  }
}
function get_distance_down(move_number) {
  var move_from = hanoiGame.move_from[move_number - 1]
  var move_to = hanoiGame.move_to[move_number - 1]

  if (move_from === 0) {
    hanoiGame.columns[0] -= 1
  } else if (move_from === 1) {
    hanoiGame.columns[1] -= 1
  } else if (move_from === 2) {
    hanoiGame.columns[2] -= 1
  }

  if (move_to === 0) {
    hanoiGame.columns[0] += 1
  } else if (move_to === 1) {
    hanoiGame.columns[1] += 1
  } else if (move_to === 2) {
    hanoiGame.columns[2] += 1
  }
  return 0 + ((hanoiGame.columns[move_to] - 1) * (hanoiGame.disc_height)) + 'px'
}

function third_move(move_number, distance_down) {
  $('#disc' + hanoiGame.disc_order[hanoiGame.animate_count - 1]).animate({
    bottom: distance_down
  }, 500,
    'swing',
    function() {
      if (hanoiGame.animate_count < hanoiGame.move_to.length) {
        first_move()
      }
    }
  )
}
function second_move(move_number) {
  var left_value = hanoiGame.col_pos[hanoiGame.move_to[move_number - 1]]
  $('#disc' + hanoiGame.disc_order[hanoiGame.animate_count - 1]).animate({
    left: left_value
  }, 500,
  'swing',
  function() {
    var distance_down = get_distance_down(move_number)
    third_move(move_number, distance_down)
  }
  )
}
function first_move() {
  hanoiGame.animate_count += 1
  var disc_number = hanoiGame.move_from[hanoiGame.animate_count - 1]
  $('#disc' + hanoiGame.disc_order[hanoiGame.animate_count - 1]).animate({
    bottom: hanoiGame.top
  }, 500,
  'swing',
  function() {
    hanoiGame.list_html += hanoiGame.list_items.shift()
    hanoiGame.ordered_list.html('')
    hanoiGame.ordered_list.append(hanoiGame.list_html)
    second_move(hanoiGame.animate_count)
  }
  )
}
function calculate_all_moves(discs) {
  hanoiGame.columns[0] = 3
  hanoi(discs, 'left-tower', 'mid-tower', 'right-tower')
}
calculate_all_moves(3)
setTimeout(first_move, 1500)
console.log(window.hanoiGame)

})
