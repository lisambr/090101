window.addEventListener("DOMContentLoaded", init);

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

//3 CLONE data
function showPost(post) {
    const template = document.querySelector(".myTemplate").content;
    const postCopy = template.cloneNode(true);


//4 APPEND
    document.querySelector("#music").appendChild(postCopy)
}
