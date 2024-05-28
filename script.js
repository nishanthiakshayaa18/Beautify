var sidenav = document.querySelector(".side-navbar");
var menubar = document.querySelector(".navbar-menu i");
var closenav = document.querySelector(".side-navbar i");

function showNav() {
    sidenav.style.left = "0";
}

var sidelinks = document.querySelector(".side-navbar");
sidelinks.addEventListener("click", function () {
    sidenav.style.left = "-50%";
    sidenav.style.transition = "0s";

});
function submitform() {
    var dataElements = document.querySelectorAll(".data");
    dataElements.forEach(function(element) {
        element.value = ''; 
    });
}
