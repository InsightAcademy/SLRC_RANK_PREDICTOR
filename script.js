const scriptURL = 'https://script.google.com/macros/s/AKfycbx8GJMa6vBUd4Y8QJfIik4ey5N8gE7vVQfDZNZDFR62c2C6gD1AEabofdQnbp7sHaU/exec'
const form = document.forms['rank-form']
form.addeventlistener('Submit', e => {
    e.preventDefault ()
fetch(scriptURL, {method: 'POST', body: new FormData(form)})
.then(response => alert('Thank you!'))
.then (()=> {window.location.reload(); })
.catch(error => console.error('error!', error.message))
})
