const input = document.querySelector('input')
const search  = document.querySelector('#icon')
const cardElement = document.querySelector('.card')

search.addEventListener('click',searchFood)

function searchFood(){
    const query = input.value
    fetchFunction(query)
}
function fetchFunction(q){
    const baseURL = `https://api.edamam.com/search?q=${q}&app_id=a6d62631&app_key=db65596bbd8f8d675d159c99933c8890&from=0&to=20`;

    fetch(baseURL)
    .then((Response) => {
        console.log(Response);
        return Response.json()
    })
    .then((result) => {
        console.log(result);
        displayFunction(result.hits);
    })
    .catch((error) => console.log("Catch Here..",error) )
}

function displayFunction(arr){

    for (let i = 0; i< arr.length; i++) {
      const element = arr[i];
      console.log(element.recipe);
      const someElement = `
        <div class="content">
            <img id="image" src="${element.recipe.image}">
        
        <div class="flex-item">
            <p>${element.recipe.source}</p>
            <a href="${element.recipe.url}">View Recipe</a>
        </div><hr size="2" color="orange">

        <p class = "properties">Calories : ${element.recipe.calories}</p>
        <hr size="2" color="orange">

        <p class = "properties">Total Time : ${element.recipe.totalTime}</p>
        <hr size="2" color="orange">
       
        

        <p class = "properties">Total Weight : ${element.recipe.totalWeight}</p>

        <div class="details">
    <p>Recipe Name : ${element.recipe.label}</p>
        </div>
    </div>
      `
cardElement.innerHTML = cardElement.innerHTML + someElement
       
    }
}

