function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

function getSubmittedInformation() {
    const submittedInfo = JSON.parse(localStorage.getItem("formData"));
    if (submittedInfo) {
        const infoElement = document.createElement("div");
        infoElement.innerHTML = `
            <p>Username: ${submittedInfo.username}</p>
            <p>Article Title: ${submittedInfo.articleTitle}</p>
            <p>Message: ${submittedInfo.message}</p>
            <p>Time of Publishing: ${submittedInfo.time}</p>
        `;
        const blogEntries = document.getElementById("blogEntries");
        blogEntries.appendChild(infoElement);
    }
}

