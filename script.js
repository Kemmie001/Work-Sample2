// Get button to display food modal
let foodModalBtn = document.querySelector("#foodModalBtn");

// Get button to close food modal
let closeFoodModalBtn = document.querySelector(".close-food-modal");

// Get button food modal
// let foodModal = document.getElementById("foodModal");

const foodModal = document.querySelector(".food-modal");
const foodModalContent = document.querySelector(".food-modal-content");

foodModalBtn.addEventListener("click", () => {
  foodModal.style.display = "block";
});

const closeModal = () => {
  foodModalContent.classList.add("close-food-modal");

  setTimeout(() => {
    foodModal.style.display = "none";
    foodModalContent.classList.remove("close-food-modal");
  }, 500);
};

foodModal.addEventListener("click", (e) => {
  if (e.target == foodModal) {
    closeModal();
  }
});

// Close food modal by clicking button
closeFoodModalBtn.addEventListener("click", () => {
  closeModal();
});

///////////////////////////////////////////////
// Cleaning House modal actions
// Get button to display food modal
let cleaningModalBtn = document.querySelector("#cleaningModalBtn");

// Get button to close food modal
let closeCleaningModalBtn = document.querySelector(".close-cleaning-modal");

// Get button cleaning modal
let cleaningModal = document.querySelector(".cleaning-modal");

cleaningModalBtn.addEventListener("click", () => {
  cleaningModal.style.display = "block";
});

const cleaningModalContent = document.querySelector(".cleaning-modal-content");

const closeCleaningModal = () => {
  cleaningModalContent.classList.add("close-food-modal");

  setTimeout(() => {
    cleaningModal.style.display = "none";
    cleaningModalContent.classList.remove("close-food-modal");
  }, 500);
};

cleaningModal.addEventListener("click", (e) => {
  if (e.target == cleaningModal) {
    closeCleaningModal();
  }
});
// Close food modal by clicking button
closeCleaningModalBtn.addEventListener("click", () => {
  closeCleaningModal();
});
