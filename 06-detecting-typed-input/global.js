window.addEventListener("load", function(){

    var name_field = document.getElementById("vards");
  
    name_field.addEventListener("keyup", function() {
  
      var greeting_div = document.getElementById("sveiciens");
  
      greeting_div.innerHTML = ("Sveiki, " + name_field.value + "!");
  
    });
  
  });