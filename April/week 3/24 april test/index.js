const data = [{
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
}, {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
}, {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
}, {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
}, {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
}, {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"
}]


  const imageElement = document.querySelector('img')
  const fnameElement = document.querySelector('.fname')
  const lnameElement = document.querySelector('.lname')
  const emailElement = document.querySelector('.email')

  const imageElement2 = document.querySelector('#img2')
  const fnameElement2 = document.querySelector('.fname2')
  const lnameElement2 = document.querySelector('.lname2')
  const emailElement2 = document.querySelector('.email2')

  const imageElement3 = document.querySelector('#img3')
  const fnameElement3 = document.querySelector('.fname3')
  const lnameElement3 = document.querySelector('.lname3')
  const emailElement3 = document.querySelector('.email3')

  const imageElement4 = document.querySelector('#img4')
  const fnameElement4 = document.querySelector('.fname4')
  const lnameElement4 = document.querySelector('.lname4')
  const emailElement4 = document.querySelector('.email4')

  const imageElement5 = document.querySelector('#img5')
  const fnameElement5 = document.querySelector('.fname5')
  const lnameElement5 = document.querySelector('.lname5')
  const emailElement5 = document.querySelector('.email5')

  const imageElement6 = document.querySelector('#img6')
  const fnameElement6 = document.querySelector('.fname6')
  const lnameElement6 = document.querySelector('.lname6')
  const emailElement6 = document.querySelector('.email6')


 

        imageElement.src = data[0].avatar
        fnameElement.innerText = 'First Name : ' + data[0].first_name
        lnameElement.innerText = 'last Name : ' + data[0].last_name
        emailElement.innerText = 'Email : ' + data[0].email
        
        imageElement2.src = data[1].avatar
        fnameElement2.innerText = 'First Name : ' + data[1].first_name
        lnameElement2.innerText = 'last Name : ' + data[1].last_name
        emailElement2.innerText = 'Email : ' + data[1].email

        imageElement3.src = data[2].avatar
        fnameElement3.innerText = 'First Name : ' + data[2].first_name
        lnameElement3.innerText = 'last Name : ' + data[2].last_name
        emailElement3.innerText = 'Email : ' + data[2].email

        imageElement4.src = data[3].avatar
        fnameElement4.innerText = 'First Name : ' + data[3].first_name
        lnameElement4.innerText = 'last Name : ' + data[3].last_name
        emailElement4.innerText = 'Email : ' + data[3].email

        imageElement5.src = data[4].avatar
        fnameElement5.innerText = 'First Name : ' + data[4].first_name
        lnameElement5.innerText = 'last Name : ' + data[4].last_name
        emailElement5.innerText = 'Email : ' + data[4].email


        imageElement6.src = data[5].avatar
        fnameElement6.innerText = 'First Name : ' + data[5].first_name
        lnameElement6.innerText = 'last Name : ' + data[5].last_name
        emailElement6.innerText = 'Email : ' + data[5].email





//   let arrIndex = 0
//   const anyElement = reviews[arrIndex]

//   const imageElement = document.querySelector('img')
//   const nameElement = document.querySelector('.name')
//   const jobElement = document.querySelector('.job')
//   const textElement = document.querySelector('.text')
 
// function someFunction(indexNumber){

//     imageElement.src = indexNumber.img
//     nameElement.innerText = indexNumber.name
//     jobElement.innerText = indexNumber.job
//     textElement.innerText = indexNumber.text
// }
// someFunction(anyElement)

  