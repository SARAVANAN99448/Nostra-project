var products = document.getElementById("products")
var serach = document.getElementById("search")
var productslist = products.querySelectorAll("div")
serach.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0;count<productslist.length;count=count+1){
        var productname = productslist[count].querySelector("h1").textContent
  
    console.log(productname)
if(productname.toUpperCase().indexOf(enteredvalue)<0)
    {
         productslist[count].style.display="none"
        }
else{
    productslist[count].style.display="block"
}
    }
})

var product = document.getElementById("product")
var serachbar = document.getElementById("search-bar")
var productslists = product.querySelectorAll("div")
serachbar.addEventListener("keyup",function(){
    var enteredvalues = event.target.value.toUpperCase()

    for(count=0;count<productslists.length;count=count+1){
        var productnames = productslists[count].querySelector("h1").textContent
  
    
if(productnames.toUpperCase().indexOf(enteredvalues)<0)
    {
         productslists[count].style.display="none"
        }
else{
    productslists[count].style.display="block"
}
    }
})


var menubar = document.getElementById("menubar")
var sidemenubar = document.getElementById("sidemenubar")
menubar.addEventListener("click",function(){
sidemenubar.style.display="flex"
})

var closebar = document.getElementById("closebar")

closebar.addEventListener("click",function(){
    sidemenubar.style.display="none"
})


