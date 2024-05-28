var search=document.getElementById("search")
var productContainer=document.getElementById("products")
var productList=productContainer.querySelectorAll("div")
enteredValue='';
search.addEventListener("keyup",function(event){
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<productList.length;count=count+1){
        var productname=productList[count].querySelector("h4").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})
var sidenav = document.querySelector(".side-navbar");
var menubar = document.querySelector(".navbar-menu i");
var closenav = document.querySelector(".side-navbar i");

function showNav() {
    sidenav.style.left = "0";
}

var sidelinks=document.querySelector(".side-navbar");
sidelinks.addEventListener("click",function(){
    sidenav.style.left = "-50%";
    sidenav.style.transition="0s";
    
});
