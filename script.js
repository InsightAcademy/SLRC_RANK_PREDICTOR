const scriptURL = ''
const form = document.forms['rank-form']
form.addeventlistener('Submit', e => {
    e.preventDefault ()
fetch(scriptURL, {method: 'POST', body: new FormData(form)})
.then(response => alert('Thank you!'))
.then (()=> {window.location.reload(); })
.catch(error => console.error('error!', error.message))
})