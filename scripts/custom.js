$( document ).ready(function() {
  
  var firstNumStr = '';
  var secondNumStr = '';
  var thirdNumStr = '';
  
  var feet = 0;
  
  var content = $('#lol').text().split('x');
  
  for(var i = 0; i < content.length;i = i + 3) {
    if($.isNumeric(content[i])) {
      firstNumStr += content[i];
      secondNumStr += content[i+1];
      thirdNumStr += content[i+2];
    }
    
    var firstNum = parseInt(firstNumStr);
    var secondNum = parseInt(secondNumStr);
    var thirdNum = parseInt(thirdNumStr);
    var firstPseudoArea = firstNum * secondNum;
    var secondPseudoArea = firstNum * thirdNum;
    var thirdPseudoArea = secondNum * thirdNum;
    
    feet += ( 2 * firstPseudoArea) + (2 * secondPseudoArea) + (2 * thirdPseudoArea);
    
    feet += [firstPseudoArea, secondPseudoArea, thirdPseudoArea].sort()[0] * [firstPseudoArea, secondPseudoArea, thirdPseudoArea].sort()[1];
    
    firstNum = '';
    secondNum = '';
    thirdNum = ''; 
  }
  
  $('#result').text('Result = ' + feet);
});
