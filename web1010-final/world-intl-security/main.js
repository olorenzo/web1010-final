const brandLogo = document.querySelector('.brand-logo')
const missionContent = document.querySelector('.mission-content')
const missionBtn = document.querySelector('#mission-btn')
const servicesBtn = document.querySelector('#services-btn')
const servicesContent = document.querySelector('.services-content')
const cardTitle = document.querySelector('.card-title')
const buenaForma = document.querySelector('#buenaForma')
const buenaFormaBtn = document.querySelector('#buenaForma button')



missionBtn.addEventListener('click', function(event) {
  event.preventDefault()
  missionContent.classList.toggle('hidden');
})

servicesBtn.addEventListener('click', function(event) {
  event.preventDefault()
  servicesContent.classList.toggle('hidden');
})
cardTitle.addEventListener('click', function(event) {
  event.preventDefault()
  cardTitle.toggle('hidden');
})



buenaForma.addEventListener('submit', function(event) {
  event.preventDefault()
  $.ajax({
    url: 'http://fvi-grad.com:4004/fakeform',
    method: 'POST',
    data: $(buenaForma).serialize(),
    success: function() {
buenaFormaBtn.textContent ='SEND!!'
buenaForma.reset()
    }
  })
})
