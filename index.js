import {menuArray} from './data.js'
const newHTML =  document.getElementById('newHTML')

let newElem = [] 
function arrayHTML(){
 const newARRy = menuArray.map((items) =>{
 return newElem =`

<div class="item">

<div class="ctn">
<p class="btn">+</p>
<h1 class="emoji">${items.emoji}</h1>
<p class"name">${items.name}</p>
<p class"ingredients">${items.ingredients}</p>
<p class"price">${items.price}</p>
</div>
</div>
`

}).join(' ')
newHTML.innerHTML = `<p>${newARRy}</p>`
}
arrayHTML()


