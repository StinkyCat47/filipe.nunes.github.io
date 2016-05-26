function doIt() {
  
  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
  
  
  var ruleOne = 'aeiou';
  var ruleTwo = 'repeated char';
  var ruleThree = ['ab', 'cd', 'pq', 'xy'];
  
  var input = $('#lol').text();
  var inputArr = input.split('\n');
  
  for(var i = 0; i < inputArr.length; ++i) {
    //
    // DO TESTS!
    //
  }
  
  $('#result').text('Result = ' + result);
}
  
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
