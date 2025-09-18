import {menuArray} from './data.js'
const renderHtml = document.getElementById('newHTML')
const newElem = ''

function arrayHTML(){
    
const newArray = menuArray.forEach((items) =>{
return newElem = `
<div>
<span>${items.name}</span>
<p>${items.ingredients}</p>
<P>${items.id}</p>
<p>${items.emoji}</p>
</div>`



}).join('')
renderHtml.innerHTML += `<p>${newArray()}</p>`
}


