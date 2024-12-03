// Reference value to compare with
const referenceValue = "SavioN200";

// Function to validate input
function validateInput() {
    // Get the value from the input field
    const inputField = document.getElementById("userInput");
    const userInput = inputField.value.trim(); // `.trim()` removes extra spaces
    
    // Check if the input matches the reference value
    if (userInput === referenceValue) {
        // If matches, perform an action
          window.location.href = 'https://savion-thomas.github.io/Portofolio/index.html';
        // Example action: console log or redirect
        console.log("Action performed!");
    } else {
        // If not, show an error alert
        alert("Error:Password Incorrect. Try again!");
    }
}
function Cleardata(){
  document.getElementById('userInput').value = '';
  document.getElementById('userName').value = '';
}