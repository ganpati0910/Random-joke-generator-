const jokeContainer=document.getElementById("joke");
const button=document.getElementById("button");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke =() =>{
    fetch(url)
    .then(data=>data.json())
    .then(getting=>{
        jokeContainer.textContent=`${getting.joke}`
    });
}
button.addEventListener("click",getjoke);
getjoke();