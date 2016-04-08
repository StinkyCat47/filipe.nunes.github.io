$( document ).ready(function() {
  
  var firstNum = '';
  var secondNum = '';
  var thirdNum = '';
  var whichNum = 1;
  var feet = 0;
  var shouldSum = false;
  var content = $('#lol').text().split('');
  for(var i = 0; i < content.length;++i) {
      if($.isNumeric(content[i])) {
          if(whichNum == 1) {
              firstNum += content[i];
          }
          if(whichNum == 2) {
              secondNum += content[i];
          }
          if(whichNum == 3) {
              thirdNum += content[i];
              
              shouldSum = i == content.length - 1;
          }
      } else if(content[i] == 'x') {
          whichNum++;
      } else {
          shouldSum = true; 
      }
      if(shouldSum) {
          var firstArea = parseInt(firstNum);
          var secondArea = parseInt(secondNum);
          var thirdArea = parseInt(thirdNum);
          feet += ( firstArea + secondArea + thirdArea );
          
          feet += [firstArea, secondArea, thirdArea].sort()[0] * [firstArea, secondArea, thirdArea].sort()[1];
          
          whichNum = 1;
          firstNum = '';
          secondNum = '';
          thirdNum = ''; 
          shouldSum = false;
      }
  }
  
  $('#result').text('Result = ' + feet);
});
