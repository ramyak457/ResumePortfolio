var modal1 = document.getElementById("myModalFrontend");
var modal2 = document.getElementById("myModalCloud");
var modal3 = document.getElementById("myModalDatabase");
var modal4 = document.getElementById("myModalFramework");
var modal5 = document.getElementById("myModalTools");
var modal6 = document.getElementById("myModalDeployment");
var modal7 = document.getElementById("myModalMethodologies");
var modal8 = document.getElementById("myModalVersionCtrl");
var closeSpans = document.getElementsByClassName("close");
const openModal1 = function () {
    modal1.style.display = "block";
}
const openModal2 = function () {
    modal2.style.display = "block";
}
const openModal3 = function () {
    modal3.style.display = "block";
}
const openModal4 = function () {
    modal4.style.display = "block";
}
const openModal5 = function () {
    modal5.style.display = "block";
}
const openModal6 = function () {
    modal6.style.display = "block";
}
const openModal7 = function () {
    modal7.style.display = "block";
}
const openModal8 = function () {
    modal8.style.display = "block";
}

Array.from(closeSpans).forEach(function (span, idx, arr) {
    span.onclick = function (event) {

        if (event.target == modal1 || modal2 || modal3 || modal4 || modal5 || modal6 || modal7 || modal8) {
            modal1.style.display = "none";
            modal2.style.display = "none";
            modal3.style.display = "none";
            modal4.style.display = "none";
            modal5.style.display = "none";
            modal6.style.display = "none";
            modal7.style.display = "none";
            modal8.style.display = "none";
        }
    }

});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6 || event.target == modal7 || event.target == modal8) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";
        modal7.style.display = "none";
        modal8.style.display = "none";
    }
}
function openPage(pageUrl) {
    window.open("", "_blank");
}