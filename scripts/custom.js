$( document ).ready(function() {
  
  var firstNumStr = '';
  var secondNumStr = '';
  var thirdNumStr = '';
  
  var feet = 0;
  
  
  //
  // Maybe split by ('') would be best, which was replaced in commit a9fc97dd787f8d2646dd13065c2201e420e25305
  //
  var content = $('#lol').text().split('x');
  
  for(var i = 0; i < content.length;i = i + 3) {
    if($.isNumeric(content[i])) {
      firstNumStr += content[i];
      secondNumStr += content[i+1];
      
      //
      // TODO!
      //
      
      var thirdNumStrAux = content[i+2].split('');
      for(var j = 0; j < thirdNumStrAux.length; j++) {
        if($.isNumeric(thirdNumStrAux[j])) {
          thirdNumStr += thirdNumStrAux [j];
        }
      }
    }
    
    var firstNum = parseInt(firstNumStr);
    var secondNum = parseInt(secondNumStr);
    var thirdNum = parseInt(thirdNumStr);
    var firstPseudoArea = firstNum * secondNum;
    var secondPseudoArea = firstNum * thirdNum;
    var thirdPseudoArea = secondNum * thirdNum;
    
    feet += ( 2 * firstPseudoArea) + (2 * secondPseudoArea) + (2 * thirdPseudoArea);
    
    feet += [firstPseudoArea, secondPseudoArea, thirdPseudoArea].sort()[0];
    
    firstNum = '';
    secondNum = '';
    thirdNum = ''; 
  }
  
  $('#result').text('Result = ' + feet);
});
