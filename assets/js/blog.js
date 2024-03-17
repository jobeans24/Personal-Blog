// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Function to display submitted information by time of publishing
function displaySubmittedInformation() {
    // Get the form element
    const form = document.getElementById("myForm");

    // Get the input values
    const username = form.elements["username"].value;
    const articleTitle = form.elements["articleTitle"].value;
    const message = form.elements["message"].value;

    // Get the current time
    const currentTime = new Date().toLocaleTimeString();

    // Create a new element to display the submitted information
    const infoElement = document.createElement("div");
    infoElement.innerHTML = `
        <p>Username: ${username}</p>
        <p>Article Title: ${articleTitle}</p>
        <p>Message: ${message}</p>
        <p>Time of Publishing: ${currentTime}</p>
    `;

    // Append the new element to the body
    document.body.appendChild(infoElement);
}

displaySubmittedInformation(); // Call the function to display the submitted information by time of publishing