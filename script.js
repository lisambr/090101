showElements()

function showElements(jsElement) {
    console.log('working')
    //2 clone template
    const template = document.querySelector("template").content;
    const myCopy = template.cloneNode(true);
    //3 change data

    //4 append
    const parentElement = document.querySelector("main");
    parentElement.appendChild(myCopy);

}


//window.addEventListener("DOMContentLoaded", init);

//1 FETCH data from database
function getFrontpageData() {
    fetch("http://iesdesigner.eu/wordpress/wp-json/wp/v2/music?_embed")
        .then(res => res.json())
        .then(handleData)
}

//2 LOOP data
function handleData(myData) {
    myData.forEach(showPost)
}

//3A CLONE data
function showPost(post) {
    const template = document.querySelector(".myTemplate").content;
    const postCopy = template.cloneNode(true);
    //3B CHANGE Stuff

    const h1 = postCopy.querySelector("h1");
    h1.textContent = post.title.rendered;

    //4 APPEND
    document.querySelector("#music").appendChild(postCopy)
}
