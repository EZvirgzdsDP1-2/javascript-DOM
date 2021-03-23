window.addEventListener("load", function(){

    document.getElementById("button").addEventListener("click",function(){

    var hideClass=document.getElementsByClassName("toggle_me");
    for(var i = 0; i < hideClass.length; i++)
    {
        if(hideClass[i].style.display=="none")
        {
            hideClass[i].style.display = "block";
        }
        else
        {
            hideClass[i].style.display="none";
        }
    }
    });
});