import {menuArray} from '/data.js'
const newRender = document.getElementById('newHTML')
const newFeed = document.getElementById('newList')
const newRol = document.getElementById('newRol')
const newText = document.getElementById('newText')



document.addEventListener('click', function(e){ 
if(e.target.dataset.id){
myFunction(e.target.dataset.id) 
}
}) 

let a =[]
function myFunction(id){
let html = ''
/*filtering data-id --- elem.id*/
const all = menuArray.filter(elem=>{ 
return elem.id == id
})

/*Rendering the list of items*/
let x = ""
let y = ""
let z = ""

for(let i of all){
  x =i.name
  y =i.price
  z = i.id
 
  newFeed.innerHTML += `
  <div class="ordersBox">
  <div class="name">
  <p id="Move">${x}</p>
   </div>
   <div class="price"><p id="Move">$${y}</p></div>
   </div>
  `
} 
 
 
/*Total Orders*/ 
if(y < 14){
    a.push(y)
}if(y == 14){
    a.push(y)
}
let ordersTotal = a.reduce((acc, acu)=>acc+acu, 0)

/*displaying to the screen the list of items && Total Orders*/

newRol.innerHTML = `<div class="box">
                    <span class="total">
                    <p class="tPrice">Total Price:</p> 
                    <p class="oTotal">$${ordersTotal}<p>
                    </span>
                    </div>`

let payOrders = ''
payOrders  = `<div class="ctn">
<p class="nOrders">Your Orders</p>
<button class="cOrders">Complete Order</button>
</div>`
newText.innerHTML = payOrders


return all 
}



/* looping dinamicaly throught items*/
function feedHTML(){
let html = ''
menuArray.forEach(function(items){
html+= `

<div class="ctn">
<div class="border">
<span class="btn" data-role="user" data-id=${items.id} data-p=${items.price}>+</span>
<h1 class="emoji">${items.emoji}</h1>
<p>${items.name}</p>
<p>${items.ingredients}</p>
<p data-role="user" data-id=${items.id}> $ ${items.price}</p>
<p class="hidden">${items.id}</p>
</div>
</div>
`

})
newRender.innerHTML = html
 return html
} 

feedHTML()
