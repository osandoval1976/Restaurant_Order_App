import {menuArray} from './data.js'
console.log(menuArray)
const newFeed = document.getElementById('newList')
const newTotal = document.getElementById('newTotal')
let newElem = []
let newRol = ''
document.addEventListener('click', function(e){
if(e.target.dataset.id){
myFunction(e.target.dataset.id) 
}
})
function myFunction(item){
 const array = menuArray.filter(elem =>{
  if(elem.id){
  return elem.id === item
  }
})  
    const menu =  menuArray.reduce((accumulator, currentValue)=> {
      return accumulator  + currentValue.price}, 0)
  console.log(`total :$${menu}`)
 }
    

/* looping dinamicaly throught items*/
function feedHTML(item){
 let html = ''
elem.forEach(function(items){
html+= `

<div class="ctn">
<span class="btn" data-role="user" data-id=${items.id}>+</span>
<h1 class="emoji">${items.emoji}</h1>
<span>${items.name}</span>
<span>${items.ingredients}</span>
<span> $ ${items.price}</span>
<span>${items.id}</span>
</div>
`

})

 return html
   

}
console.log(feedHTML)
function render(){
document.getElementById('newHTML').innerHTML = feedHTML(menuArray)
}
render()

