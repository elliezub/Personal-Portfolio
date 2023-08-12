const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('#nav-list')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navList.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navList.classList.remove('active')
  })
)

const toggle = document.getElementById('toggle')
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

// Formspree AJAX
var form = document.getElementById('form')
var formContainer = document.getElementById('email-form-container')
async function handleSubmit(event) {
  event.preventDefault()
  var status = document.getElementById('my-form-status')
  var data = new FormData(event.target)
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = 'Thanks for your submission!'
        form.reset()
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data['errors']
              .map((error) => error['message'])
              .join(', ')
          } else {
            status.innerHTML = 'Oops! There was a problem submitting your form'
          }
        })
      }
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form'
    })
}
form.addEventListener('submit', handleSubmit)
