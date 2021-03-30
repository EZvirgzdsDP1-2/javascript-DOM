window.addEventListener("load", function(){

    var firstNumbers = document.getElementById('first');
    var middleNumbers = document.getElementById('second');
    var endNumbers = document.getElementById('third');
  
    firstNumbers.addEventListener("keyup", function() {
      typedCharacters = firstNumbers.value.length;
      maxCharacters = parseInt(firstNumbers.getAttribute("maxlength"));
  
      if (typedCharacters === maxCharacters) {
        middleNumbers.focus();
      }
    });
  
    middleNumbers.addEventListener("keyup", function() {
      typedCharacters = middleNumbers.value.length;
      maxCharacters = parseInt(middleNumbers.getAttribute("maxlength"));
  
      if (typedCharacters === maxCharacters) {
        endNumbers.focus();
      }
    });
  
  });