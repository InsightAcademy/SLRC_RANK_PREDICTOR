<script>
  // Get the form element
  const form = document.getElementById('rank-form');

  // Add an event listener to the form's submit event
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Submit the form using the XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxBmj9G60KVKB-Sa-EEHIcZ0McdFJDsWJ5aNH9Saf9NW8rnhev23-s-YREuzlzfQXI/exec', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      console.log('onload event triggered');
      console.log('xhr.status:', xhr.status);
      console.log('xhr.responseText:', xhr.responseText);
      if (xhr.status === 200) {
        console.log('Response received from server');
        const response = JSON.parse(xhr.responseText);
        console.log('Response parsed:', response);
        if (response.result === 'success') {
          console.log('Form submitted successfully!');
          console.log('response.row:', response.row);
          alert('Form submitted successfully! Your rank is: ' + response.row);
        } else {
          console.log('Error submitting form');
          alert('Error submitting form. Please try again.');
        }
      } else {
        console.log('Error submitting form:', xhr.statusText);
      }
    };
    xhr.send(new FormData(form));
  });
</script>
