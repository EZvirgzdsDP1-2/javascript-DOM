window.addEventListener("load", function(){

    document.getElementById("button").addEventListener("click",function(){

    var hideClass=document.getElementsByClassName("show_me");
    for(var i = 0; i < hideClass.length; i++)
    {
        hideClass[i].style.display = "block"; 
    }
    });
});

