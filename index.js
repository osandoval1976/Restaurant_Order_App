import {menuArray} from './data.js'
const newHTML =  document.getElementById('newHTML')

let newElem = [] 
function arrayHTML(item){
return item.forEach((items) =>{
 newElem.push(`
<section class="item">
<div class="nArray">
<h1>${items.name}</h1>
<p>${items.ingredients}</p>
<h2>${items.id}</h2>
<h3>${items.emoji}</h3>
<p>${items.price}</p>
</div>
</section>
`)
newHTML.innerHTML = `<p>${newElem}</p>`
})


}
arrayHTML(menuArray)


