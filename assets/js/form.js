document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'blog.html';
});


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the form data
    const formData = new FormData(event.target);
    
    // Convert the form data to an object
    const formObject = Object.fromEntries(formData.entries());
    
    // Store the form data in localStorage
    localStorage.setItem('formData', JSON.stringify(formObject));
    
    window.location.href = 'blog.html';
});


