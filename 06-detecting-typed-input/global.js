window.addEventListener("load", function(){

    var nameField = document.getElementById("vards");
  
    nameField.addEventListener("keyup", function() {
  
      var greetingDiv = document.getElementById("sveiciens");
  
      greetingDiv.innerHTML = ("Sveiki, " + nameField.value + "!");
  
    });
  
  });