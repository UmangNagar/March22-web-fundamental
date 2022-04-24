// var some1 = document.getElementById('input1')
// var button1 = document.getElementById('b1')



// function showPass(){
//     some1.type = 'text',
//     button1.innerText = 'Hide Password'
// }
// var img = document.getElementById('img1')
// var div1 = document.getElementById('container')

// function male(){
// div1.innerHTML = `
// <img src="1.1.jpg">
// `
// }

// function female(){
//     div1.innerHTML = `
//     <img src="1.10.jpg">
//     `
//     }

// var inputText = document.getElementById('input1')
// // var some5 = document.querySelector('h3')

// function myFunction(){
//     // alert('working')
//     var newElement = document.createElement('h3')
//     newElement.innerText = `${inputText.value}`;
//     document.body.appendChild(newElement)
// }
function myFunction(){

fetch("https://randomuser.me/api/?results=10")


.then(data => data.json())
.then(data => {

  const someArr = data.results[0].email
 console.log(someArr);

})
.catch(error => {
    console.log(error);
})


}

