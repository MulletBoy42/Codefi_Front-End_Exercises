// * Inline HTML * \\
function changeBackground() {
    document.body.style.backgroundcolor = "#bae6fd"
}

// * JavaScript button onclick properties * \\
const javascriptMultipleButton = document.querySelectorall(".btn_onclick");

javascriptMultipleButton.onclick.forEach((button)) ; {
    button.onclick = function () {
        document.body.style.backgroundColor = "#a7f3d0"
    };
 }; 

// * JavaScript Event listener * \\
function changeBgToRandom() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
}

// * JavaScript Event listener * \\
function changeBgToRandom() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
    document.body.style.backgroundColor = `#${randomColor}`;
  }
  
  const eventListenerButton = document.querySelector(".btn_event-listener");
  eventListenerButton.addEventListener("click", changeBgToRandom);
  eventListenerButton.addEventListener("mouseenter", changeBgToRandom);

  