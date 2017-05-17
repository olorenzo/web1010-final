const contactDiv = document.querySelector('#contact-div')
const cardText = document.querySelector('#card-text')
const mainForm = document.querySelector('#mainForm')
const mainFormBtn = document.querySelector('#mainForm button')

contactDiv.addEventListener('click', function(event) {
  event.preventDefault()
  cardText.classList.toggle('hidden')
})


mainForm.addEventListener('submit', function(event) {
event.preventDefault()
  $.ajax({
    url:'http://fvi-grad.com:4004/fakeform',
    method: 'POST',
    data: $(mainForm).serialize(),
    success: function() {
      mainFormBtn.textContent = 'Message Sent!'
      mainForm.reset()
    }
  })

})
