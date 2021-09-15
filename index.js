// var slideIndex = 1;
var slideIndex = 0;
let timeout;
// showSlides(slideIndex);
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    clearTimeout(timeout);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("opa");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if  (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    timeout = setTimeout(showSlides, 4000);
}

// Embed part of anywebsite
// var iframe = document.getElementById("iframe");
// var div = document.getElementById("main-ahead");
// div.innerHTML = iframe.contentWindow.document.getElementsById("days").innerHTML;
// console.log(iframe.contentWindow.document.getElementsById("eac-container-companypagesearch").innerHTML)