// modal
let modal = document.querySelector('.modal')
let openBtns = document.querySelectorAll('[data-modal]')
let closeBtns = document.querySelectorAll('[data-close]')


openBtns.forEach((btn) => {
   btn.onclick = () => {
      modal.classList.add('show', 'fade')
   }
})

closeBtns.forEach((btn) => {
   btn.onclick = () => {
      modal.classList.remove('show', 'fade')
   }
})

// slider

let slides = document.querySelectorAll('.offer__slide')
let next = document.querySelector('.offer__slider-next')
let prev = document.querySelector('.offer__slider-prev')

let slideIndex = 0

function showSlides(n) {

   if (slideIndex > slides.length - 1) {
      slideIndex = 0
   }

   if (slideIndex < 0) {
      slideIndex = slides.length - 1
   }

   slides.forEach(slide => slide.classList.add('hide'))

   slides[slideIndex].classList.remove('hide')
   slides[slideIndex].classList.add('fade')
}


next.onclick = () => {
   slideIndex += 1

   showSlides()
}
prev.onclick = () => {
   slideIndex -= 1

   showSlides()
}

showSlides()

// calc
let genBtns = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let resultView = document.querySelector('#result')

let userData = {
   gender: "woman"
}

genBtns.forEach(btn => {
   btn.onclick = () => {
      genBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
      btn.classList.add('calculating__choose-item_active')
      let gen = btn.getAttribute('data-gen')
      userData.gender = gen
   }
})

inputs.forEach(inp => {
   inp.onkeyup = () => {
      userData[inp.name] = inp.value;
      setInterval(() => {
         if (inp.value.trim() === '') {
            inp.style.border = '1px solid red'
         } else {
            inp.style.border = '0px solid red'
         }
      }, 200);
   }
})

actBtns.forEach((btn => {
   btn.onclick = () => {
      actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
      btn.classList.add('calculating__choose-item_active')
      let act = +btn.getAttribute('data-act')
      if (userData.gender === 'woman') {
         let BMR = 447.6 + (9.2 * userData.weight) + (3.1 * userData.height) - (4.3 * userData.age)
         if (isNaN(Math.round(BMR * act))) {
            resultView.innerHTML = '';
            inputs.forEach(inp => {
               inputs.forEach(item => item.style.border = '1px solid red')
               inp.onclick = () => {
                  inp.style.border = '0px solid red'
               }
            }, 500);
         } else {
            resultView.innerHTML = Math.round(BMR * act)
         }
      } else {
         let BMR = 88.36 + (13.4 * userData.weight) + (4.8 * userData.height) - (5.7 * userData.age)
         if (isNaN(Math.round(BMR * act))) {
            resultView.innerHTML = ''
         } else {
            resultView.innerHTML = Math.round(BMR * act)
         }
      }
   }
}))

let sec = document.querySelector('#seconds')
let min = document.querySelector('#minutes')
let hors = document.querySelector('#hours')
let day = document.querySelector('#days')
let intirval;

intirval = setInterval(() => {
   sec.innerHTML--
   if (sec.innerHTML <= 0) {
      sec.innerHTML = 59
      min.innerHTML--
      if (min.innerHTML <= 0) {
         min.innerHTML = 59
         hors.innerHTML--
         if (hors.innerHTML <= 0) {
            day.innerHTML--
            if (day.innerHTML <= 0) {
               clearInterval(interval)
               hors.innerHTML = 0
               min.innerHTML = 0
               sec.innerHTML = 0
            }
         }
      }
   }
}, 1000)