window.addEventListener("DOMContentLoaded", function () {
  var colorDisplay = document.getElementById("color-display");
  var colorOptions = document.getElementById("color-options");
  var boxes = colorOptions.getElementsByClassName("color-box");
  var score = 0;
  var scoreElement = document.getElementById("score-value");
  var resetButton = document.getElementById("reset-button");

  // Generate a random color
  function generateColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Update the game
  function updateGame() {
    var correctColor = generateColor();
    colorDisplay.style.backgroundColor = correctColor;

    // Assign the correct color to a random box
    var correctBoxIndex = Math.floor(Math.random() * 3);
    boxes[correctBoxIndex].style.backgroundColor = correctColor;

    // Assign random colors to the other boxes
    for (var i = 0; i < 3; i++) {
      if (i !== correctBoxIndex) {
        boxes[i].style.backgroundColor = generateColor();
      }
    }
  }

  // Check if the selected color is correct
  function checkColor(event) {
    var selectedColor = event.target.style.backgroundColor;
    if (selectedColor === colorDisplay.style.backgroundColor) {
      score++;
      scoreElement.textContent = score;
    } else {
      score--;
      scoreElement.textContent = score;
    }
    updateGame();
  }

  // Reset the score
  function resetScore() {
    score = 0;
    scoreElement.textContent = score;
  }

  // Add click event listeners to color boxes
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", checkColor);
  }

  // Add click event listener to reset button
  resetButton.addEventListener("click", resetScore);

  // Start the game
  updateGame();
});
