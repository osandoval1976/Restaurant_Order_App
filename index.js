import {menuArray} from './data.js'

const renderHtml = document.getElementById('newHTML')
const newElem = ''
function renderHTML(item){
const newArray = item.map((items) =>{
newElem = `
<div>
<span>${items.name}</span>
<p>${items.ingredients}</p>
<P>${items.id}</p>
<p>${items.emoji}</p>

</div>`



}).join('')
renderHTML.innerHTML += `<p>${newArray}</p>`
}

console.log(renderHTML())
