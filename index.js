import {menuArray} from '/data.js'
const newFeed = document.getElementById('newList')
const newRol = document.getElementById('newRol')

document.addEventListener('click', function(e){ 
if(e.target.dataset.id){
myFunction(e.target.dataset.id) 
}
})  






function myFunction(id){
let html = ''
let htmlTotal =''
const all = menuArray.filter(elem=>{
return elem.id == id
})
let x = ""
let y = ""
let z = ""
for(let i of all){
  x =i.name
  y =i.price
  z = i.id
  html = `<div class="box">
  <p>${x}</p> <p data-total=${y}>${y}</p>
  </div> `
}  
 
 newFeed.innerHTML += html
getSum(y)
render()
return all  
} 
let a =[]
function getSum(total){
let x = []

let b =[]
let c =[]
let z = [total]
for(let i of z){
  x.push(i)
  if(x < 14){
    a.push(i)
  
  }if(x == 14){
    a.push(i)
    
  }
  
}
let ordersTotal = a.reduce((acc, acu)=>acc+acu, 0)
newRol.innerHTML = `<div class="box1">Total: ${ordersTotal}</div>`
console.log(ordersTotal)
return total
}
/* looping dinamicaly throught items*/
function feedHTML(elem){
let html = ''
elem.forEach(function(items){
html+= `

<div class="ctn">
<span class="btn" data-role="user" data-id=${items.id} data-p=${items.price}>+</span>
<h1 class="emoji">${items.emoji}</h1>
<p>${items.name}</p>
<p>${items.ingredients}</p>
<p data-role="user" data-id=${items.id}> $ ${items.price}</p>
<p class="hidden">${items.id}</p>
</div>
`

})

 return html
} 
function render(){
document.getElementById('newHTML').innerHTML = feedHTML(menuArray)
}
render()
