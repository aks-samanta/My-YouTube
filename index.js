
let body=document.querySelector("body");

    body.onload =  getdata();

function getdata(){
  
    const Url=  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyAYc-WDxz5ywDN1DQZ3HdIgmuJdk6Clhwo`;

    fetch(Url)
    .then((res)=>{
        return res.json();
        // console.log(res);
    })
    .then((res)=>{
        console.log(res)
        res.items.forEach(element => {
        append(element);
            
        });
    })
    .catch((err)=>{
        console.log(err)
    })
}


let append=(element)=>{


    let img=document.createElement("img");
    img.src=element.snippet.thumbnails.medium.url;

    let h2=document.createElement("h4");
    h2.innerText=element.snippet.title;

    let p=document.createElement("p");
    p.innerText=element.snippet.channelTitle;

    let div=document.createElement("div");
    div.append(img,h2,p);
    div.addEventListener("click",()=>{
        localStorage.setItem("video",JSON.stringify(element) );
        window.location.href="video.html"
    });
    
    container.append(div)

}


function showresults (){
   
}


let form=document.querySelector("#submit");
form.addEventListener("click",search)
 

function search (){
    

        event.preventDefault();
        let query = document.querySelector("#query").value;
        console.log(query);
        let container = document.querySelector("#container");
        container.innerHTML = null;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyDQTQUb9Wjq8xsaxfWbI8T6B1hft1XIBSA`;

        fetch(url)
            .then((res) => {
                return res.json();
                // console.log(res);
            })
            .then((res) => {
                console.log(res);
                res.items.forEach(element => {
                   
                    appendsearch(element);

                });
            })
            .catch((err) => {
                console.log(err);
            });

}

function appendsearch(element){
    let img=document.createElement("img");
    img.src=element.snippet.thumbnails.medium.url;

    let h2=document.createElement("h4");
    h2.innerText=element.snippet.title;

    let p=document.createElement("p");
    p.innerText=element.snippet.channelTitle;

    let div=document.createElement("div");
    div.append(img,h2,p);
    div.addEventListener("click",()=>{
        localStorage.setItem("video",JSON.stringify(element) );
        window.location.href="video.html"
    });
    
    container.append(div)
}