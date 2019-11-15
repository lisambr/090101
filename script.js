window.addEventListener("DOMContentLoaded", getFrontpageData);


//1 FETCH data from database

function getFrontpageData(){
	fetch("http://iesdesigner.eu/wordpress/wp-json/wp/v2/music?_embed")
	.then(res=>res.json())
	.then(handleData)}

//2 LOOP data
function handleData(myData) {
    myData.forEach(showPost)
}

//3A CLONE data
function showPost(post) {
    const template = document.querySelector(".myTemplate").content;
    const postCopy = template.cloneNode(true);
    //3B CHANGE Stuff
    //--- Change IMG
    const imgPath = post.poster.guid;
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + post.title.rendered)

    //--- Change H1
    const h1 = postCopy.querySelector("h1");
    h1.textContent = post.title.rendered;

    //--- Change P1 ATTTENTION FIND PATH replace XXXX
    /*const p1 = postCopy.querySelector("p1");
    p1.textContent = post.title.XXXXXXX;*/

    //--- Change P2
    const p2 = postCopy.querySelector("p2");
    p2.innerHTML = post.event_date;

       //--- Change P3 ATTTENTION FIND PATH replace XXXX
    /*const p2 = postCopy.querySelector("p2");
    p2.innerHTML = post.event_date;*/

    const h5 = postCopy.querySelector("h5");
    h5.innerHTML = post.content.rendered;

    //4 APPEND
    document.querySelector("#music").appendChild(postCopy)
}
