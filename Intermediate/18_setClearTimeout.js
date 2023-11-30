var id = setTimeout(Anim,5000)

function Anim(){
    var target = document.getElementById("test")
    target.style.width = "500px";
}

function stopAnimation(){
    clearTimeout(id)
}