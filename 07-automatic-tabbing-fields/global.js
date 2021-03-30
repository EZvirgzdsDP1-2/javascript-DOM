window.addEventListener("load", function(){

    var areaCode = document.getElementById('first');
    var middleNumbers = document.getElementById('second');
    var endNumbers = document.getElementById('third');
  
    areaCode.addEventListener("keyup", function() {
      typedCharacters = areaCode.value.length;
      maxCharacters = parseInt(areaCode.getAttribute("maxlength"));
  
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