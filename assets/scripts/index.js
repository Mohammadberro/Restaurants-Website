// IndexPage

let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let numbertext = document.getElementsByClassName("numbertext");
let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  display((slideIndex-1));
}

function display(index){
  slides[index].style.display = "block";
  dots[index].className += " active";
  numbertext[index].innerHTML = `${index+1}/${slides.length}`;
}