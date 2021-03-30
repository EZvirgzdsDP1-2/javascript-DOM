window.addEventListener("load", function(){

    document.getElementById("button").addEventListener("click",function(){

        var hideClass=document.getElementsByClassName("hide_me");
        
        for(var i = 0; i < hideClass.length; i++){
            hideClass[i].style.visibility = "hidden"; // or
        
        }
    });
});

