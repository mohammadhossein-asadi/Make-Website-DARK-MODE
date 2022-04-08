// # Get elements

const img = document.querySelector(".main-img img");
const toggleBtn = document.querySelector(".toggle");
const toggleText = document.querySelectorAll(".toggle-text");

// # Toggle Variables

let bool = true;

toggleBtn.addEventListener("click", () => {
  /*  Change Image and Text
        content with toggle variable */

  if (bool === true) {
    // * Change image to light
    img.src = "./img/cup-light.png";

    // * Change text content
    toggleText.forEach((text) => {
      text.innerText = "White ";
    });
  }
});
