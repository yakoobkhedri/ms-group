
// menu

let btn = Array.from(document.querySelectorAll('.viza'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let dropdownBtn =Array.from(document.getElementsByClassName('dropdownBtn'));
let dropdownBtn2 =Array.from(document.getElementsByClassName('dropdownBtn2'));
let hamIcon = document.getElementById('hamIcon');


dropdownBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.querySelector('.arrowSvg').classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
dropdownBtn2.forEach((item)=>{
  item.addEventListener('click', function () {
    item.querySelector('.arrowSvg').classList.toggle('active');
    item.nextElementSibling.nextElementSibling.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})

btn.forEach((item) => {
  item.addEventListener('mouseover', function () {
    btn.forEach((items) => {items.classList.remove('active')});
    item.classList.add('active');
    let tabId = item.dataset.id;
    tabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add('grid');
        content.classList.remove('hidden');
      } else {
        content.classList.remove('grid');
        content.classList.add('hidden');
      }
    })
  })
});

hamIcon.addEventListener('click', function () {
  hamIcon.classList.toggle('active');
  document.querySelector('.mobileMenu').classList.toggle('active');
})


// swiper
var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop:true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var services = new Swiper(".services", {
  slidesPerView: 1.6,
  spaceBetween: 19,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 38,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var customer = new Swiper(".customer", {
  slidesPerView: 1,
  spaceBetween: 38,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});