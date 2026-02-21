
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

filters.forEach(f=>
  f.addEventListener("change",filterproducts)
)

function filterproducts(){
  const activefilters = {
    color:[],
    arrival:[],
    occasion:[]
  }
  
  
filters.forEach(f=>{
  if(f.checked){
    const type = f.dataset.filter
    activefilters[type].push(f.value)
  }

})

products.forEach(product=>{

  const color = product.dataset.color
  const arrival = product.dataset.arrival
  const occasion = product.dataset.occasion

  const matchColor = activefilters.color.length==0||activefilters.color.includes(color)

  const matcharrival = activefilters.arrival.length==0||activefilters.arrival.includes(arrival)

  const matchoccasion = activefilters.occasion.length==0||activefilters.occasion.includes(occasion)

  if(matchColor&&matcharrival&&matchoccasion){
    product.style.display = "block"
  }

  else{
    product.style.display = "none"
  }

})

}