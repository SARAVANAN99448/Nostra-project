
var menubar = document.getElementById("menubar")
var sidemenubar = document.getElementById("sidemenubar")
menubar.addEventListener("click",function(){
sidemenubar.style.display="flex"
})

var closebar = document.getElementById("closebar")

closebar.addEventListener("click",function(){
    sidemenubar.style.display="none"
})

// sign up offer

var closex = document.getElementById("closex")
var signup = document.getElementById("signup")
closex.addEventListener("click",function(){
signup.style.display="none"
})

// new arrival

var newarrival = document.getElementById("newarrival")
var arrivalsection = document.getElementById("arrivalsection")

newarrival.addEventListener("click",function(){
    arrivalsection.scroll()
})