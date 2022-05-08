 const url = window.location.href;
//  console.log(url);
 const url_obj = new URL(url);
 const params = new URLSearchParams(url_obj.search)
 if (!params.has('id')) {
     window.location.href = index.html
 }
 const video_id = params.get('id')
 
 fetch(' https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id='+video_id+'&key=AIzaSyCMoJbyEAucCUzW9fbnQ9fEqHUronoMgAw')
 .then((res) => {
     return res.json();
 }).then((data) => {
     console.log(data);
     const video_details = data.items[0]
     const title  = video_details.snippet.title;
     const channel_name = video_details.snippet.channelTitle;
     const description  = video_details.snippet.description;
     const view_count = video_details.statistics.viewCount;
     const like_count = video_details.statistics.likeCount;
     

     document.getElementById('video_title').innerText = title
     document.getElementById('channel_name').innerText = channel_name
     document.getElementById('description').innerText = description
     document.getElementById('views').innerText = view_count
     document.getElementById('likes').innerText = like_count
     document.getElementById('player_iframe').src="https://www.youtube.com/embed/" + video_id;

     getSuggestions();
 })

 function getSuggestions(){
     fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId='+video_id+'&type=video&key=AIzaSyCMoJbyEAucCUzW9fbnQ9fEqHUronoMgAw')
.then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
    const suggestion_list = data.items;
    const suggestions = document.getElementById('suggestion_container')
    for (let i = 0; i < suggestion_list.length; i++) {
        const single_suggestion = suggestion_list[i];
        console.log(single_suggestion);

        if(single_suggestion.snippet === undefined){
            continue;
        }

        const suggestion_video_title = single_suggestion.snippet.title;
        const suggestion_video_id = single_suggestion.id.videoId;
        const suggestion_video_thumbnail = single_suggestion.snippet.thumbnails.high.url;


        const h5_element = document.createElement('h5')
        h5_element.classList.add('card-title')
        h5_element.innerText = suggestion_video_title;

        const anchor_ele = document.createElement('a')
        anchor_ele.href = `details.html?id=${suggestion_video_id}`;
        anchor_ele.appendChild(h5_element)


        const div_element = document.createElement('div')
        div_element.classList.add('card-body')
        div_element.appendChild(anchor_ele);

        const img_element = document.createElement('img')
        img_element.src = suggestion_video_thumbnail;
        img_element.classList.add('card-img-top');

        const card_div_element = document.createElement('div')
        card_div_element.classList.add('card')
        card_div_element.style.minWidth = '18rem';
        card_div_element.style.maxWidth = '18rem';
        card_div_element.appendChild(img_element)
        card_div_element.appendChild(div_element)

        suggestions.appendChild(card_div_element)
        

        
    }
}) 
 
    }

    // <div class="card" style="min-width: 18rem;">
    //             <img src="..." class="card-img-top" alt="...">
    //             <div class="card-body">
    //               <h5 class="card-title">Card title</h5>
              
    //             </div>
    //           </div>
 