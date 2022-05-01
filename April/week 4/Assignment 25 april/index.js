const homeElement = document.getElementById('home-btn')
const aboutElement = document.getElementById('about-btn')
const kindelElement = document.getElementById('kindel-btn')
const bodyElement = document.getElementById('display-body')

homeElement.addEventListener('click',homeFunction)
aboutElement.addEventListener('click',aboutFunction)
kindelElement.addEventListener('click',kindelFunction)

function removeClass(){
    homeElement.classList = 'btn'
    aboutElement.classList = 'btn'
    kindelElement.classList = 'btn'
    
}

function homeFunction(){
    removeClass()
    homeElement.classList = 'active'
    const newElement1 = `HOME : 
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, recusandae.
    In publishing and graphic design, Lorem ipsum is a placeholder text commonly
used to demonstrate the visual form of a document or a typeface without relying
on meaningful content.
`
    bodyElement.innerHTML = newElement1
}
function aboutFunction(){
    removeClass() 
    aboutElement.classList = 'active'
    const newElement2 = `About Us :
    Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown 
printer took a galley of type and scrambled it to make a 
type specimen book. It has survived not only five centuries, 
but also the leap into electronic typesetting, 
remaining essentially unchanged.
    `
    bodyElement.innerHTML = newElement2

}

function kindelFunction(){
    removeClass()
    kindelElement.classList = 'active'
    const newElement3 = `Kindel :
It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, and more recently 
with desktop publishing software like Aldus PageMaker 
including versions of Lorem Ipsum.
    `
    bodyElement.innerHTML = newElement3

}
