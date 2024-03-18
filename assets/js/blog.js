// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
// Function to retrieve submitted information from localStorage
function getSubmittedInformation() {
    // Get the submitted information from localStorage
    const submittedInfo = JSON.parse(localStorage.getItem("formData"));

    // Check if there is any submitted information
    if (submittedInfo) {
        // Create a new element to display the submitted information
        const infoElement = document.createElement("div");
        infoElement.innerHTML = `
        <p style="font-weight: bold; font-size: 2em;">${submittedInfo.title}</p> 
        <p>Message: ${submittedInfo.message}</p>
                    <p><em>Published By:</em> <span style="font-size: 0.9em;">${submittedInfo.username}</span></p>
                `;

        // Get the blogEntries element
        const blogEntries = document.getElementById("blogEntries");

        // Append the new element to the blogEntries element
        blogEntries.appendChild(infoElement);
    }
}

// Call the function to retrieve and display the submitted information
getSubmittedInformation();


