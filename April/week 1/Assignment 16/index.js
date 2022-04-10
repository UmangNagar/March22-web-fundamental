const x=document.querySelector('h4')
x.innerHTML=`
<img src='image1.jpg'>
`
function myfunction(){

    i.classList.add('hover')
}
const i = document.querySelector('img')
i.addEventListener('mouseover',myfunction)

function myfunction2(){
    i.classList.add('out')
}
i.addEventListener('mouseout',myfunction2)
