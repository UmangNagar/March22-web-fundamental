console.log('document')

// const newP2=document.createElement('p')
// newP2.innerText='hello i am changed now'
// const target1=document.querySelector('h3')
// target1.appendChild(newP2)

// const pre2=document.getElementById('para1')
// pre2.innerText="changeed"
// const here=document.querySelector('h2')
// here.classList.add('class1')

const names = ['virat','dhoni','rohit','hardik','Bumrah','Shami','Rahul','Ishaan']
const colors = ['one','two','three','four','five','six','seven','eight']

for(let i=0;i<names.length;i++){
    const newElement=document.createElement('p')
    newElement.innerText= names[i]
    newElement.classList.add('previous', colors[i])

    const target=document.querySelector('h2')
    target.appendChild(newElement)

}


