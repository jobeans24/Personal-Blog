// Get the form element from index.html
const form = document.getElementById("myForm");

// Add an event listener to the form submission
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the values entered in the form
        const username = document.getElementById("username").value;
        const articleTitle = document.getElementById("articleTitle").value;
        const message = document.getElementById("message").value;

        // Create a query string with the values
        const queryString = `username=${encodeURIComponent(username)}&articleTitle=${encodeURIComponent(articleTitle)}&message=${encodeURIComponent(message)}`;

        // Redirect to blog.html with the query string
        window.location.href = `blog.html?${queryString}`;
    });
}

const blogEntries = [];

  // Sort blog entries by published time and date
  blogEntries.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  // Generate HTML for each blog entry
  const blogEntriesContainer = document.getElementById("blogEntries");
  blogEntries.forEach(entry => {
    const entryElement = document.createElement("div");
    entryElement.innerHTML = `
      <h2>${entry.title}</h2>
      <p>${entry.content}</p>
        <p>Written by: ${entry.author}</p>
      <p>Published at: ${new Date(entry.publishedAt).toLocaleString()}</p>
      <hr>
    `;
    blogEntriesContainer.appendChild(entryElement);
  });
    // Get the query string from the URL
    const queryString = window.location.search;

    // Create a new URLSearchParams object
    const urlParams = new URLSearchParams(queryString);

    // Get the values from the URL
    const username = urlParams.get("username");
    const articleTitle = urlParams.get("articleTitle");
    const message = urlParams.get("message");

