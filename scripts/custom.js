$( document ).ready(function() {
  
  var steps = $.trim($('#lol').text());
  
  for(var i = 0; i < steps.length;++i) {
    var move = steps[i];
  }

  $('#result').text('Result = ' + feet);
});

function sortNumber(a,b) {
    return a - b;
}
