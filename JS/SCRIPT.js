console.log("Cześć");

let myButton = document.querySelector(".myButton");
let imagesContainer = document.querySelector(".section__imagesContainer");

myButton.addEventListener("click", () => {
    imagesContainer.remove();
});