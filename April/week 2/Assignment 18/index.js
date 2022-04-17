const someElement2 = document.createElement('hr')
// someElement2.innerText = ''
someElement2.classList.add('line')
document.querySelector('h1').appendChild(someElement2)



const students = [
    {name: "john 0", score:45},
    {name: "john 1", score:33},
    {name: "john 2", score:55},
    {name: "john 3", score:65},
    {name: "john 4", score:85},
  ]
//   console.log(students)

// write a function which will first add 15 
// grace marks to people < 50 

// step - 1 - add 15 grace marks to people < 50
// step - 2 - after adding the grace marks, print the list of passing students
// passing means score > 50

function myFunction(studentList){
    const myNewArr = []
    for(let i=0;i<studentList.length;i++){
      
        if(studentList[i].score<50){
            const obj = {
                name :studentList[i].name,
                score :studentList[i].score+10
            }
           myNewArr.push(obj)
        }
        else{
            myNewArr.push(studentList[i])
        }
     
    }

    console.log(myNewArr)

    for(let i=0;i<myNewArr.length;i++){
        if(myNewArr[i].score>50){
            console.log(myNewArr[i].name ,"has passed")
            const someElement = document.createElement('h3')
            someElement.innerText = myNewArr[i].name 
            document.querySelector('h1').appendChild(someElement)

            const someElement1 = document.createElement('p')
            someElement1.innerText = myNewArr[i].score + ' - Passed'
            document.querySelector('h1').appendChild(someElement1)

            const someElement2 = document.createElement('hr')
            // someElement2.innerText = ''
            someElement2.classList.add('line')
            document.querySelector('h1').appendChild(someElement2)
        }
        else{
            console.log(myNewArr[i].name ,"has failed")
            const someElement = document.createElement('h3')
            someElement.innerText = myNewArr[i].name
            document.querySelector('h1').appendChild(someElement)

            const someElement1 = document.createElement('p')
            someElement1.innerText = myNewArr[i].score +  ' - failed'
            document.querySelector('h1').appendChild(someElement1)

            const someElement2 = document.createElement('hr')
            // someElement2.innerText = ''
            document.querySelector('h1').appendChild(someElement2)
        }
    }

}
myFunction(students)
