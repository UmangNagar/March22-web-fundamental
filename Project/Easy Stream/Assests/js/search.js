const url = window.location.href;
const url_obj = new URL(url);
const params = new URLSearchParams(url_obj.search)
const search_query = params.get('q')
console.log(search_query);

if(!params.has('q')){
    window.location.href = 'index.html'
}

fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+search_query+'&type=video&key=AIzaSyCMoJbyEAucCUzW9fbnQ9fEqHUronoMgAw')
.then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
    const search_result = data.items;
    for (let i = 0; i < search_result.length; i++) {
        const single_video = search_result[i];

        if(single_video.snippet === undefined){}
        createSingleVideoElement(single_video);
        
    }

    

});

function createSingleVideoElement(video){
    if(video.snippet === undefined){
        return;
    }
    const title = video.snippet.title;
    const channel_name = video.snippet.channelTitle;
    const description = video.snippet.description;
    const thumbnail = video.snippet.thumbnails.high.url;
    const upload_date = video.snippet.publishedAt;
    const video_id = video.id.videoId;
  
  
    const main_title = document.createElement('h5');
    main_title.classList.add('card-title');
    main_title.innerText = title;
  
    const anchor = document.createElement('a');
    anchor.href = "details.html?id=" + video_id;
    anchor.appendChild(main_title);
  
    const channel = document.createElement('h6');
    channel.classList.add('card-title');
    channel.innerText = channel_name;
  
    const description_text = document.createElement('p');
    description_text.classList.add('card-text');
    description_text.innerText = description;
  
    const upload = document.createElement('p');
    upload.classList.add('card-text');
    upload.innerText = upload_date;
  
    const card_body = document.createElement('div');
    card_body.classList.add('card-body');
    card_body.appendChild(anchor);
    card_body.appendChild(channel);
    card_body.appendChild(description_text);
    card_body.appendChild(upload);
  
    const right_container = document.createElement('div');
    right_container.classList.add('col-md-9', 'col-sm-7');
    right_container.appendChild(card_body);
  
    const image = document.createElement('img');
    image.src = thumbnail;
    image.classList.add('img-fluid', 'rounded-start');
  
    const left_container = document.createElement('div');
    left_container.classList.add('col-md-3', 'col-sm-5');
    left_container.style.display = "flex";
    left_container.style.alignItems = "center";
    left_container.style.background = "#000000";
    left_container.appendChild(image);
  
    const row = document.createElement('div');
    row.classList.add('row', 'g-0');
    row.appendChild(left_container);
    row.appendChild(right_container);
  
    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(row);
  
    const container = document.createElement('div');
    container.classList.add('bg-light', 'border');
    container.appendChild(card);

    const search_result_container = document.getElementById('search_result_container');
    search_result_container.appendChild(container);
}

    /* <div class="bg-light border">    
<div class="card"  >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div></div> */