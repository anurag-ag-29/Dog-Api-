const btn=document.getElementById('btn')
const final=document.getElementById('output')
let res=[]
// const options=document.getElementById('options')
btn.addEventListener("click",requesting);
let i=0;
function requesting()
{
let req=new XMLHttpRequest();
req.open("get","https://api.thedogapi.com/v1/breeds")
req.send();
req.addEventListener("load",function(event){
var data=JSON.parse(event.target.responseText)
res=data
console.log(data)
i=showElements(i)
})
}
function showElements(i)
{
  let y=i+10;
  res.forEach(function(val){
if(i<y)
{
let new_div=document.createElement("div")
let lists=document.createElement("ol")
new_div.appendChild(lists)
lists.style.listStyleType="square"
let tiles=document.createElement("li")
tiles.style.textAlign="center"
let breed=document.createElement("p")
let lifespan=document.createElement("p")
let image=document.createElement("img")
image.setAttribute("src",res[i].image["url"])
image.setAttribute("height","200px")
image.style.border="2px solid black"
tiles.appendChild(image)
tiles.appendChild(breed)
tiles.appendChild(lifespan)
lists.appendChild(tiles)
breed.innerText="Breed Name  : "+res[i].name
lifespan.innerText="Life Span : "+res[i].life_span

new_div.appendChild(tiles)
final.appendChild(new_div)
i++;
}
})
return i
}