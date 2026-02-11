
const close = document.getElementById("close")

close.addEventListener("click",()=>{
const discount = document.getElementById("discount")
discount.style.display = "none"

})




const slider = document.getElementById("slider");
let currentSlide = 0;
const totalSlides = slider.children.length;

function updateSlide() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  updateSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateSlide();
}


menuicon = document.getElementById("menuicon")
sidenav = document.getElementById("sidenav")
closer = document.getElementById("closer")

menuicon.addEventListener("click",()=>{
  sidenav.style.left = "0%"
})

closer.addEventListener("click",()=>{
  sidenav.style.left = "-50%"
})


const hearts = document.querySelectorAll(".heart-icon")
hearts.forEach((heart)=>{
  heart.addEventListener("click",()=>{
    if(heart.classList.contains("fa-regular")){
      heart.classList.remove("fa-regular")
      heart.classList.add("fa-solid")
      heart.style.color = "red"
    }

    else{
      heart.classList.add("fa-regular")
      heart.classList.remove("fa-solid")
      heart.style.color = "black"
    }
  })
})