// Function to shake the text
function shakeText() {
  const textElement = document.getElementById("shakingText");
  let xPos = 0;
  let yPos = 0;
  let amplitude = 5; // Adjust this value to control the shaking intensity
  let frequency = 15; // Adjust this value to control the shaking speed

  // Move the text back and forth
  const shakeInterval = setInterval(function() {
    // Calculate new position
    xPos = Math.floor(Math.random() * (amplitude * 2 + 1)) - amplitude;
    yPos = Math.floor(Math.random() * (amplitude * 2 + 1)) - amplitude;

    // Apply new position
    textElement.style.transform = "translate(" + xPos + "px, " + yPos + "px)";

    // Clear interval after some time
    setTimeout(function() {
      clearInterval(shakeInterval);
      // Reset position
      textElement.style.transform = "translate(0, 0)";
    }, 1000); // Adjust this value to control how long the shaking lasts
  }, frequency); // Adjust this value to control the shaking frequency
}

// Call the function to start shaking the text
shakeText();

