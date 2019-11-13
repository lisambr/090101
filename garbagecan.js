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

function showDish(dish) {
    console.log(dish)
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector(".data_name").textContent = dish.name;

    if(dish.alcohol){
        copy.querySelector(".containsAlcohol").textContent = `${dish.alcohol}% Alcohol`;
    }else{
        copy.querySelector(".containsAlcohol").remove();
    }
    copy.querySelector(".shadow").src = `assets/imgs/medium/${dish.image}-md.jpg`;

    copy.querySelector(".data_price").textContent = `${dish.price},-- DKK`;
    if (dish.discount) {
        copy.querySelector(".data_price").classList.add("discount");
        copy.querySelector(".data_discount").textContent = `${Math.round(dish.price - dish.discount / 100 * dish.price)},-- DKK`
    } else {
        copy.querySelector(".data_discount").remove();
    }

    if (dish.soldout) {

    } else {
        copy.querySelector(".imgSoldout").remove()
    }
    copy.querySelector("button").addEventListener("click", () => {
        fetch(`https://kea-alt-del.dk/t5/api/product?id=${dish.id}`)
            .then(res => res.json())
            .then(showDetails);
    });



    document.querySelector(`#${dish.category}`).appendChild(copy);

}

