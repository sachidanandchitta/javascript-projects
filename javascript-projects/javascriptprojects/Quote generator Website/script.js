const quote= document.getElementById("quote");
const author= document.getElementById("author");
const length= document.getElementById("length");
const api_url ="https://api.quotable.io/random"

        async function getquote(url){
            const response = await fetch(url);
            var data = await response.json();
            console.log(data);
            quote.innerHTML=data.content;
            author.innerHTML=data.author;
            length.innerHTML=data.length;
        }
        getquote(api_url);
