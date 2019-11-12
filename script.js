//1 loop

//eventElements.forEach(showElements)

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

//1 FETCH data from database

fetch("http://iesdesigner.eu/wordpress/wp-json/wp/v2/music?_embed")
    .then(res => res.json())
    .then(function (data) {
        data.forEach(buildCategory)
        getProducts();
    })


function buildCategory(data) {
    const section = document.createElement("section");
    const header = document.createElement("h1");
    header.textContent = data;
    section.setAttribute("id", data)
    section.appendChild(header);
    document.querySelector("main").appendChild(section);
}

function getProducts() {
    fetch("https://kea-alt-del.dk/t5/api/productlist")
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            data.forEach(showDish)
        })
}
