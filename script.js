window.addEventListener("DOMContentLoaded", init);

//1 FETCH data from database
function getFrontpageData() {
    //console.log("getFrontpageData")

    fetch("http://iesdesigner.eu/wordpress/wp-json/wp/v2/music?_embed")
        .then(res => res.json())
        .then(handleData)
}
