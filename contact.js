var menubar = document.getElementById("menubar")
var sidemenubar = document.getElementById("sidemenubar")
menubar.addEventListener("click",function(){
sidemenubar.style.display="flex"
})

var closebar = document.getElementById("closebar")

closebar.addEventListener("click",function(){
    sidemenubar.style.display="none"
})


