const form = document.querySelector('.submit-rating'),
      ratingBtn = document.querySelectorAll('.ratingBtn'),
      submitBtn = document.getElementById('submit-btn'),
      thankYou = document.querySelector('.thankyou'),
      yourRating = document.querySelector('.your-rating')


let ratingValue = 0;


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

