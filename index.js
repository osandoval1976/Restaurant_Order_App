import {menuArray} from './data.js'
const renderHtml = document.getElementById('newHTML')
const newElem = ''

function arrayHTML(){
    
const newArray = menuArray.forEach((items) =>{
return newElem = `
<section class= "item">
<div>
<h1>${items.name}</h1>
<h2>${items.ingredients}</h2>
<h3>${items.id}</h3>
<h4>${items.emoji}</h4>
<p>${items.price}</p>
</div>
</section>
`

}).join('')
renderHtml.innerHTML += `<p>${newArray()}</p>`
}


function renderHTML(){
    return arrayHTML()
}