function toggleMode() { 
    const body = document.body;
    body.classList.toggle("dark-mode"); // Toggle the dark-mode class on the body
}

function getSubmittedInformation() { // Function to retrieve submitted information from localStorage
    const submittedInfo = JSON.parse(localStorage.getItem("formData"));
    if (submittedInfo) {
        const infoElement = document.createElement("div");
        infoElement.innerHTML = `
           
            <p>Blog Title: ${submittedInfo.title}</p>
            <p>Message: ${submittedInfo.message}</p>
                        <p>Published By: ${submittedInfo.username}</p>
                    `;
                    const blogEntries = document.getElementById("blogEntries");
                    blogEntries.appendChild(infoElement);
                }
            }



