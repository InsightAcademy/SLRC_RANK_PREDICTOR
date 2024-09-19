

  // Get the form element
  const form = document.getElementById('rank-form');

  // Add an event listener to the form's submit event
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Add a popup message
    alert('Form submitted successfully!');

    // You can also use a more modern approach with a modal or a toast notification library
    // For example, with Bootstrap:
    // $('#myModal').modal('show');

    // If you want to submit the form programmatically, you can use the following code
    // form.submit();
  });
