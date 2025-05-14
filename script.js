const paletteContainer = document.getElementById("palette");
const generateBtn = document.getElementById("generate");

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function generatePalette() {
  paletteContainer.innerHTML = "";
  const palette = [];

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    palette.push(color);

    const block = document.createElement("div");
    block.className = "color-block";
    block.style.backgroundColor = color;
    block.innerText = color;
    paletteContainer.appendChild(block);
  }

  applyThemeColors(palette);
}

function applyThemeColors(palette) {
  // Apply colors to themed components
  document.getElementById("theme-header").style.backgroundColor = palette[0];
  document.getElementById("theme-heading").style.color = palette[1];
  document.getElementById("theme-paragraph").style.color = palette[2];
  document.getElementById("theme-button").style.backgroundColor = palette[3];
  document.getElementById("theme-footer").style.backgroundColor = palette[4];
}

generateBtn.addEventListener("click", generatePalette);
window.addEventListener("load", generatePalette);
