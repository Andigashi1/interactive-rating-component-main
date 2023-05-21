const form = document.querySelector('.submit-rating'),
      ratingBtn = document.querySelectorAll('.ratingBtn'),
      submitBtn = document.getElementById('submit-btn'),
      thankYou = document.querySelector('.thankyou'),
      yourRating = document.querySelector('.your-rating')


let ratingValue = 0;

// Add a rating value according to the selected button
// Add or remove the selected class on click

ratingBtn.forEach(button => {
    button.addEventListener('click', () => {
        ratingValue = button.value;
        yourRating.innerHTML = `You selected ${ratingValue} out of 5`

        if(button.classList.contains('selected')) {
            button.classList.remove('selected')
        } else {
            ratingBtn.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected')
        }
    })
})

// Submit button which can be excecuted only after selecting a value

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if(ratingValue === 0) {
        alert('Please give us a rating!')
    } else { 
        form.classList.add('hidden')
        thankYou.classList.remove('hidden')
        thankYou.classList.add('active')
    }
})

