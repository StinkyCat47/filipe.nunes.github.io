function doIt() {
  
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
