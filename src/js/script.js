
// menu

// let btn = Array.from(document.querySelectorAll('.viza'));
// let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
// let dropdownBtn =Array.from(document.getElementsByClassName('dropdownBtn'));
// let dropdownBtn2 =Array.from(document.getElementsByClassName('dropdownBtn2'));
let hamIcon = document.getElementById('hamIcon');


// dropdownBtn.forEach((item)=>{
//   item.addEventListener('click', function () {
//     item.querySelector('.arrowSvg').classList.toggle('active');
//     item.nextElementSibling.classList.toggle('active');
//   })
// })
// dropdownBtn2.forEach((item)=>{
//   item.addEventListener('click', function () {
//     item.querySelector('.arrowSvg').classList.toggle('active');
//     item.nextElementSibling.nextElementSibling.classList.toggle('active');
//     item.nextElementSibling.classList.toggle('active');
//   })
// })

// btn.forEach((item) => {
//   item.addEventListener('mouseover', function () {
//     btn.forEach((items) => {items.classList.remove('active')});
//     item.classList.add('active');
//     let tabId = item.dataset.id;
//     tabContent.forEach((content) => {
//       let contentId = content.dataset.id;
//       if (tabId === contentId) {
//         content.classList.add('grid');
//         content.classList.remove('hidden');
//       } else {
//         content.classList.remove('grid');
//         content.classList.add('hidden');
//       }
//     })
//   })
// });

hamIcon.addEventListener('click', function () {
  hamIcon.classList.toggle('active');
  document.querySelector('.mobileMenu').classList.toggle('active');
})

// menu

let list1 = Array.from(document.querySelectorAll('.list1 > a'));
let list2 = Array.from(document.querySelectorAll('.list2 > ul'));
let arrows = Array.from(document.querySelectorAll('.list1 img[alt="arrow"]'));
let mobileMenu = document.querySelector('.mobileMenu');
let serviceLink = document.getElementById('service-link');
let dropdown = document.querySelector('.dropdown');

list1.forEach((item) => {
  item.addEventListener('mouseover', function () {
    arrows.forEach((item)=>{item.classList.add('opacity-0')})
    item.querySelector('img[alt="arrow"]').classList.remove('opacity-0');
    let tabId = item.dataset.id;
    list2.forEach((content) => {
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
serviceLink.addEventListener('mouseenter', function () {
  dropdown.classList.add('active');
  document.querySelector('.servicesArrow').classList.add('opacity-100');
  document.querySelector('.servicesArrow').classList.remove('opacity-0');
})

document.addEventListener('mousemove', (event) => {
  if (!event.target.closest('.dropdown') && !event.target.closest('.dropdownArea')) {
    dropdown.classList.remove('active');
    document.querySelector('.servicesArrow').classList.remove('opacity-100');
    document.querySelector('.servicesArrow').classList.add('opacity-0');
  }
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
  slidesPerView: 1.3,
  loop:true,
  spaceBetween: 38,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 19,
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
  spaceBetween: 24,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 38,
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