document.getElementById('submitbtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameerror').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true;

    // Validate name
    if (name === '') {
        document.getElementById('nameerror').textContent = 'Name is required.';
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    // Validate password
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        valid = false;
    }

    // If all fields are valid, submit the form
    if (valid) {
        alert('Form submitted successfully!');
        // Here you can add code to actually submit the form, e.g., using AJAX or redirecting
        // For example: document.querySelector('form').submit();
         // Clear the form fields
         document.getElementById('name').value = '';
         document.getElementById('email').value = '';
         document.getElementById('password').value = '';
         
         // Optionally, you can also clear the error message
         document.getElementById('nameerror').textContent = '';
    }
});