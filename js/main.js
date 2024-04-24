const searchEl = document.querySelector('.search');
const searchInputEl =  searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function() {
  // _.throttle (함수, 시간) 0.5초 지연 
  if(window.scrollY > 500) {
    gsap.to(badgeEl, 0.5, {
      opacity:0,
      display : 'none'
    });
    // gsap.to(요소, 지속시간, 옵션)
  } else {
    gsap.to(badgeEl, 0.5, {
      opacity:1,
      display : 'block'
    });
  }
}, 500));

const fadeEls = document.querySelectorAll('.visual .fade-in');

// Visual 부분 천천히 나타나기
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index + 1) * 0.7,
    opacity : 1,
  })
});


new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});


new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, 
  spaceBetween : 10, 
  centeredSlides : true,
  loop: true,
  // autoplay : {
  //   delay : 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});

new Swiper('.awards .swiper-container', {
  autoplay : true,
  loop : true, 
  spaceBetween : 30, 
  slidesPerView : 5,
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion

  if(isHidePromotion) {
    //숨김처리! 
    promotionEl.classList.add('hide');
  } else {
    //보임 처리!
    promotionEl.classList.remove('hide');
  }

})

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, 
    random(1.5, 2.5),
    {
      y: size,
      repeat : -1,
      yoyo: true,
      ease: "power2.in",
      delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 25);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: 0.8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const this_year = document.querySelector('.this-year');
this_year.innerHTML = new Date().getFullYear();
