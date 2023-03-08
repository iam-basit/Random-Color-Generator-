const containerEl = document.querySelector(".container");

for (let index = 0; index < 35; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();
function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const charSet = "01234567890abcdef";
  const colorCodeLength = 6;
  let colorCode = "";

  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * charSet.length);
    colorCode += charSet.substring(randomNum, randomNum + 1);
    console.log(colorCode, randomNum);
  }
  return colorCode;
}
