// menu
let dropdownBtn =Array.from(document.getElementsByClassName('dropdownBtn'));
let hamIcon = document.getElementById('hamIcon');


dropdownBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.querySelector('.arrowSvg').classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})

hamIcon.addEventListener('click', function () {
  hamIcon.classList.toggle('active');
  document.querySelector('.mobileMenu').classList.toggle('active');
})

let list1 = Array.from(document.querySelectorAll('.list1 > a'));
let list2 = Array.from(document.querySelectorAll('.list2 > ul'));
let arrows = Array.from(document.querySelectorAll('.list1 svg.arrow'));
let mobileMenu = document.querySelector('.mobileMenu');
let serviceLink = document.getElementById('service-link');
let dropdown = document.querySelector('.dropdown');

list1.forEach((item) => {
  item.addEventListener('mouseover', function () {
    arrows.forEach((item)=>{item.classList.add('opacity-0')})
    item.querySelector('svg.arrow').classList.remove('opacity-0');
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
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var banner2 = new Swiper(".banner2", {
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
var banner3 = new Swiper(".banner3", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop:true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination3",
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
  // autoplay: true,
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
  spaceBetween: 38,
  loop:true,
  autoplay: true,
  breakpoints: {
    768: {
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
var comments = new Swiper(".comments", {
  direction: "vertical",
  slidesPerView: 2,
  spaceBetween: 20,
  loop:true,
  autoplay: true,
});
var relatedProjects = new Swiper(".relatedProjects", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});