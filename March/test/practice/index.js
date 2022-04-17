// // const somePromise = new Promise((resolve,reject) => {
// //     resolve('hii Umang Here')
// // })

// // somePromise.then(x => console.log('fullfilled - ',x)
// // .catch(y => console.log('Error - ',y))
// // )

// const somePromise = fetch('https://reqres.in/api/users')

// somePromise.then(data => data.json())
// .then(result => {
// // console.log(result)
//     const someArr = result.data
//     // console.log(someArr)
//     for(let i=0;i<someArr.length;i++){
//         // console.log(someArr[i])
//         const newElement = document.createElement('p')
//       newElement.innerText = `
//       ${someArr[i].first_name},${someArr[i].last_name},${someArr[i].email}
//       `
//       someArr[i].classList = 'new'
//       document.querySelector('h1').appendChild(newElement)
      
//     }
// })

console.log('hello')

setTimeout(myFunction,5000)

function myFunction(){
console.log("I'm done")

}
console.log('bye')