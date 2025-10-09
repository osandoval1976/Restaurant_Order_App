import {menuArray} from './data.js'
console.log(menuArray)
const newFeed = document.getElementById('newList')
const newTotal = document.getElementById('newTotal')
let newElem = []
let newRol = ''

function myFunction(){
   
    const menu =  menuArray.reduce((accumulator, currentValue)=> {
      return accumulator  + currentValue.price}, 0)
  console.log(`total :$${menu}`)
 }
    

/* looping dinamicaly throught items*/
function feedHTML(item){
    
let newRender = ''
item.forEach(function(items){
newRender = `
<div class="item">
<div class="ctn" >
<p class="btn">+</p>
<h1 class="emoji">${items.emoji}</h1>
<p class="name">${items.name}</p>
<p class="ingredients" >${items.ingredients}</p>
<p class="price" > $${items.price}</p>
<p class="Hidden" >${items.id}</p>
</div>
</div>
` 
})
console.log(item)
return item
}
console.log(feedHTML)
function render(){
document.getElementById('newHTML').innerHTML = feedHTML(menuArray)
}
render()

