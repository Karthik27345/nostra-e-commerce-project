menuicon = document.getElementById("menuicon")
sidenav = document.getElementById("sidenav")
closer = document.getElementById("closer")

menuicon.addEventListener("click",()=>{
  sidenav.style.left = "0%"
})

closer.addEventListener("click",()=>{
  sidenav.style.left = "-50%"
})