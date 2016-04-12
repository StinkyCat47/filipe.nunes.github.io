$( document ).ready(function() {
  
  function addHouseIfNew() {
    for(var i = 0; i < houses.length; ++i) {
      if(houses[i].x == x && houses[i].y == y) {
        return;
      }
      
      houses.push({x = x, y = y});
    }
  }
  
  var steps = $.trim($('#lol').text());
  var x = 0;
  var y = 0;
  var houses = [{x = x, y = y}];
  for(var i = 0; i < steps.length;++i) {
    var move = steps[i];
    
    if(move == '>') {
      // RIGHT
      ++x;
    } else if(move == '<') {
      // LEFT
      --x;
    } else if(move == '^') {
      // UP
      ++y;
    } else {
      // DOWN
      --y;
    }
    addHouseIfNew();
  }

  $('#result').text('Result = ' + houses.length);
});

function sortNumber(a,b) {
    return a - b;
}
