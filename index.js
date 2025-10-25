import {menuArray} from '/data.js'
const newRender = document.getElementById('newHTML')
const newFeed = document.getElementById('newList')
const newRol = document.getElementById('newRol')

/* trigger the hidde/show orders total*/
const ordersBox = document.getElementById('idBtn')
const ordersBtn = document.getElementsByClassName('ctn')

document.onclick = function() {
ordersBox.style.display = "block";
} 

/*get the modal*/
const modal = document.getElementById("myModal")
// Get the button that opens the modal
const btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
 } 
 
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"; 
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  
}
  }
 

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
/* trigger / open the modal */




return all 
}



/* looping dinamicaly throught items*/
function feedHTML(){
let html = ''
menuArray.forEach(function(items){
html+= `

<div class="ctn">
<div class="border">
<span id="btn" class="btn" data-role="user" data-id=${items.id} data-p=${items.price}>+</span>
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
