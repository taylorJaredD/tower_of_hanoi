$(document).ready(function() {
// Referenced a youtube video series by Anthony Vipond
// Create a game with jQuery UI - Tower of Hanoi
var hanoiGame = {
    disc_height: $('#disc1').outerHeight(),
    distance_between_towers: $('#tower1').position().left - $('#tower0').position().left,
    top: $('.tower').height(),
    ordered_list: $('#moves > ol'),

    list_items: [],
    list_html: '',
    columns: [0, 0, 0],
    move_from: [],
    move_to: [],
    disc_order: [],
    animate_count: 0,
    timeout: null,
    started: 0,
}
function update_move_from_array (disc) {
  if (disc == 'tower0') {
    disc = 0
  } else if (disc == 'tower1') {
    disc = 1
  } else if (disc == 'tower2') {
    disc = 2
  }
  hanoiGame.move_from.push(disc)
}
function update_move_to_array (disc) {
  if (disc == 'tower0') {
    disc = 0
  } else if (disc == 'tower1') {
    disc = 1
  } else if (disc == 'tower2') {
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
  return (hanoiGame.columns[move_to] - 1) * (hanoiGame.disc_height) + 'px'
}
// function get_left_value() {
//   var current_disc = game.disc_order[game.animate_count - 1]
//   var left_value = $('#disc' + current_disc).position().left
//   var direction = (game.move_from[game.animate_count - 1] < game.most_to[game.animate_count - 1]) ? 'right' : 'left'
//
//   if (direction == 'right') {
//     var multiplier = (game.move_to[game.animate_count - 1] - game.move_from[game.animate_count - 1] == 2) ? 2 : 1
//   } else if (direction == 'left') {
//     var multiplier = (game.move_to[game.animate_count - 1] + game.move_from[game.animate_count - 1] == 2) ? -2 : -1
//   }
//   return left_value + (game.distance_between_towers * multiplier) + 'px'
// }
//
// function send_disc_down(distance_down) {
//   $('#disc' + hanoiGame.disc_order[hanoiGame.animate_count - 1]).animate({
//     bottom: distance_down
//   }, 250,
//     'swing',
//     function() {
//       if (hanoiGame.animate_count < hanoiGame.move_to.length) {
//         send_disc_up()
//       }
//     }
//   )
// }
// function send_disc_across() {
//   var left_value = get_left_value()
//   $('#disc' + hanoiGame.disc_order[hanoiGame.animate_count - 1]).animate({
//     left: left_value
//   }, 250,
//   'swing',
//   function() {
//     var distance_down = get_distance_down(hanoiGame.animate_count)
//     send_disc_down(distance_down)
//   }
//   )
// }
// function send_disc_up() {
//   clearTimeout(hanoiGame.timeout)
//   hanoiGame.animate_count += 1
//   $('#disc' + hanoiGame.disc_order[hanoiGame.animate_count - 1]).animate({
//     bottom: hanoiGame.top
//   }, 250,
//   'swing',
//   function() {
//     // hanoiGame.list_html += hanoiGame.list_items.shift()
//     // hanoiGame.ordered_list.html('')
//     // hanoiGame.ordered_list.append(hanoiGame.list_html)
//     hanoiGame.ordered_list.prepend(hanoiGame.list_items.shift())
//     send_disc_across()
//   }
//   )
// }
function calculate_all_moves(discs) {
  hanoiGame.columns[0] = discs
  hanoi(discs, 'tower0', 'tower1', 'tower2')
}
function check_for_data_errors() {
  if (game.distance_between_towers !== $('#tower2').position().left - $('#tower1').position().left) {
    alert("The towers are not an equal distance apart")
  }
}
// function populate_discs(discs) {
//   var disc_html = ''
//   var bottom = (discs * hanoiGame.disc_height) - hanoiGame.disc_height
//
//   for (var i = 0; i < discs; i += 1) {
//     disc_html += <div class="disc" id='disc' + i + ''></div>
//   }
//   $('#discs').html(disc_html)
//   for (var i = 0; i < discs; i += 1) {
//     $('#disc' + i).css('bottom', bottom + 'px')
//     bottom = bottom - hanoiGame.disc_height
//   }
// }

calculate_all_moves(3)
//check_for_data_errors()

// $('input').click(function() {
//   if (hanoiGame.started == 0) {
//       hanoiGame.started = 1
//       var disc_amount = parseInt($(this).attr('id'))
//       populate_discs(disc_amount)
//       calculate_all_moves(disc_amount)
//       hanoiGame.timeout - setTimeout(send_disc_up, 300)
//   } else {
//     clearTimeout(hanoiGame.timeout)
//     hanoiGame.list_items = []
//     hanoiGame.list_html = ''
//     hanoiGame.columns = [0, 0, 0]
//     hanoiGame.move_from = []
//     hanoiGame.move_to = []
//     hanoiGame.animate_count = 0
//     hanoiGame.ordered_list.html('')
//     $('#discs').html('')
//
//     var disc_amount = parseInt($(this).attr('id'))
//     populate_discs(disc_amount)
//     calculate_all_moves(disc_amount)
//   }
// })

// setTimeout(send_disc_up, 1500)
console.log(window.hanoiGame)

})
