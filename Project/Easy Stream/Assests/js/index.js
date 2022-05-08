

//   /**
//    * Sample JavaScript code for youtube.videos.list
//    * See instructions for running APIs Explorer code samples locally:
//    * https://developers.google.com/explorer-help/code-samples#javascript
//    */

//   function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("YOUR_API_KEY");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtube.videos.list({
//       "chart": "mostPopular",
//       "maxResults": 24
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "AIzaSyCMoJbyEAucCUzW9fbnQ9fEqHUronoMgAw"});
//   });

fetch(' https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&key=AIzaSyCMoJbyEAucCUzW9fbnQ9fEqHUronoMgAw')
.then((res => {
    return res.json()
}))
.then((data) => {
    // console.log(data.items);
    const videoList = data.items;
    // console.log(videoList);
    const parent_div = document.getElementById('card-container')
    for(let i=0;i<videoList.length;i++){
      const singleVideo = videoList[i];
      console.log(singleVideo);
      const videoId = singleVideo.id;
      const thumbnails = singleVideo.snippet.thumbnails.high.url;
      const title = singleVideo.snippet.title;
      const channelName = singleVideo.snippet.channelTitle;
      const viewCount = singleVideo.statistics.viewCount;

  

      const title_ele = document.createElement('h5');
      title_ele.innerText = title;
      title_ele.classList.add('card-title');

      const anchor_ele = document.createElement('a')
      anchor_ele.href = `details.html?id=${videoId}`;
      anchor_ele.appendChild(title_ele)

      const para_ele = document.createElement('p');
      para_ele.innerText = `${channelName} || ${viewCount} Views`
      para_ele.classList.add('card-text')

      const div_ele = document.createElement('div')
      div_ele.classList.add('card-body')
      div_ele.appendChild(anchor_ele)
      div_ele.appendChild(para_ele)

      const image_ele = document.createElement('img')
      image_ele.src = thumbnails
      image_ele.classList.add('card-img-top')

      const div_ele1 = document.createElement('div')
      div_ele1.classList.add('card')
      div_ele1.appendChild(image_ele)
      div_ele1.appendChild(div_ele)

      const div_ele2 = document.createElement('div')
      div_ele2.classList.add('col')
      div_ele2.appendChild(div_ele1)

      parent_div.appendChild(div_ele2)
    }
})



/*
     <div class="col">
            <div class="card" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
               
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              
              </div>   

          </div>
*/