import {menuArray} from './data.js'
const newHTML =  document.getElementById('newHTML')

let newElem = [] 
function arrayHTML(){
 const newARRy = menuArray.map((items) =>{
 return newElem = (`
<section>
<div class="nArray">
<h1>${items.name}</h1>
<span>${items.ingredients}</span>
<h2>${items.id}</h2>
<h3 class="emoji">${items.emoji}</h3>
<span>${items.price}</span>
</div>
</section>
`)

}).join(' ')
newHTML.innerHTML = `<p>${newARRy}</p>`
}
arrayHTML()


