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
