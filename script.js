// Change text content
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("text").textContent = "🎉 You changed the text!";
});

// Change styles
document.getElementById("changeStyleBtn").addEventListener("click", () => {
  const text = document.getElementById("text");
  text.style.color = "crimson";
  text.style.fontSize = "22px";
  text.style.backgroundColor = "#f0f0f0";
});

// Add or remove an element
let added = false;
document.getElementById("toggleElementBtn").addEventListener("click", () => {
  const container = document.getElementById("dynamicArea");
  if (!added) {
    const newBox = document.createElement("div");
    newBox.id = "box";
    newBox.textContent = "📦 New Box Added!";
    newBox.style.border = "1px solid purple";
    newBox.style.padding = "10px";
    container.appendChild(newBox);
    added = true;
  } else {
    const box = document.getElementById("box");
    container.removeChild(box);
    added = false;
  }
});
