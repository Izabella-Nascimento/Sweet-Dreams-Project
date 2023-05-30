const contactBallsWrapper = document.querySelector(".balls-wrapper");
const contactBallsButtons = document.querySelectorAll(".balls-wrapper button");

let contactImgIndex = 0;

contactBallsWrapper.addEventListener("click", clickedElement => {
  const contactComentElement = document.querySelector("#coment");
  const contactImgsPaths = ["../../assets/imgs/Comentário1.svg", "../../assets/imgs/Comentário2.svg", "../../assets/imgs/Comentário3.svg"];
  
  contactBallsButtons.forEach((ballButton, index) => {
    if(clickedElement.target == ballButton) {
      contactComentElement.setAttribute("src", contactImgsPaths[index]);

      contactImgIndex = index;

      ballButton.classList.add("bg-contact-ball");
    } else {
      ballButton.classList.remove("bg-contact-ball");
    }
  });
});

setInterval(() => {
  contactBallsButtons[contactImgIndex].click();

  if(contactImgIndex + 1 != contactBallsButtons.length) {
    contactImgIndex += 1;
  } else {
    contactImgIndex = 0;
  }
}, 3000);