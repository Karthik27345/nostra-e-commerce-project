
const close = document.getElementById("close")

close.addEventListener("click",()=>{
const discount = document.getElementById("discount")
discount.style.display = "none"

})


menuicon = document.getElementById("menuicon")
sidenav = document.getElementById("sidenav")
closer = document.getElementById("closer")

menuicon.addEventListener("click",()=>{
  sidenav.style.left = "0%"
})

closer.addEventListener("click",()=>{
  sidenav.style.left = "-50%"
})


const products = document.querySelectorAll(".product")
const filters = document.querySelectorAll("input[type='checkbox']")

filters.forEach(filter=>{
  filter.addEventListener("change",filterproducts)
})

function filterproducts(){
  const selectedoccasion = []
  const selectedcolors = []
  const selectedarrivals = []
  if(document.getElementById("summer").checked){
    selectedoccasion.push("summer")
  }

  if(document.getElementById("party").checked){
    selectedoccasion.push("party")
  }

  if(document.getElementById("beach").checked){
    selectedoccasion.push("beach")
  }

  if(document.getElementById("red").checked){
    selectedcolors.push("red")
  }

  if(document.getElementById("white").checked){
   selectedcolors.push("white")
  }

    if(document.getElementById("green").checked){
    selectedcolors.push("green")
  }

    if(document.getElementById("blue").checked){
  selectedcolors.push("blue")
  }

    if(document.getElementById("new").checked){
    selectedarrivals.push("new")
  }

    if(document.getElementById("old").checked){
    selectedarrivals.push("old")
  }

  products.forEach(product=>{
    const occasion = product.dataset.occasion
    const colors = product.dataset.color
    const arrivals = product.dataset.arrival

    if(selectedoccasion.length==0||selectedoccasion.includes(occasion)){
      product.style.display = "block"
    }

    else{
      product.style.display = "none"
    }

 if(selectedcolors.length==0||selectedcolors.includes(colors)){
      product.style.display = "block"
    }

    else{
      product.style.display = "none"
    }

     if(selectedarrivals.length==0||selectedarrivals.includes(arrivals)){
      product.style.display = "block"
    }

    else{
      product.style.display = "none"
    }


  })
}