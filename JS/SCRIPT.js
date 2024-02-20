const helloWorld = () => {
    console.log(
  "Cześć, jestem nie tylko sędzią ale i też początkującym developerem, który sam zaprogramował tę stronę"
);}

const deleteImages = () => {
    const myButton = document.querySelector(".myButton");
    const imagesContainer = document.querySelector(".section__imagesContainer");
    myButton.addEventListener("click", () => {
        imagesContainer.remove();
      });
}

const init = () => { 
deleteImages();
helloWorld();
};

init();