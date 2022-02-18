const modal = document.getElementsByClassName("modal")[0];
const myBtn = document.getElementsByClassName("modal-open")[0];
const closeModalButton = document.getElementsByClassName("close")[0];
const modalBackground = document.getElementsByClassName("modal-background")[0];

const OpenModal = () => {
  modal.classList.add("visible");
};
const CloseModal = () => {
  modal.classList.remove("visible");
};

myBtn.addEventListener("click", OpenModal);
closeModalButton.addEventListener("click", CloseModal);
modalBackground.addEventListener("click", CloseModal);
