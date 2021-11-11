const intro = new Swiper('.intro__slider', {
    effect: 'fade',
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.intro__pagination',
        clickable: true,
    },
});

const gallery = new Swiper('.gallery__slider', {
    spaceBetween: 25,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
    },
    pagination: {
        el: '.gallery__pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const burger = document.querySelector('.header__menu');
const burgerText = burger.querySelector('p');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.header__logo');
const header = document.querySelector('.header');
const calendarTrigger = document.querySelector('.calendar__btn');
const anchor = document.querySelector('.intro__line');
let scroll = 200;

burger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    logo.classList.toggle('active');
    if (this.classList.contains('active')) {
        burgerText.textContent = 'Закрыть';
        document.body.style.overflow = 'hidden';
		header.classList.remove('scroll')
		
    } else {
        burgerText.textContent = 'Меню';
        document.body.style.overflow = 'auto';
    }
});

anchor.addEventListener('click', function () {
    document.querySelector('.wedo').scrollIntoView({ behavior: 'smooth' });
});

calendarTrigger.addEventListener('click', function () {
    document.querySelector('.calendar__wrap--more').classList.toggle('active');
});

wow = new WOW({
    boxClass: 'animation',
});

wow.init();

window.addEventListener('scroll', function () {
    menu.classList.contains('active') ||
        (window.scrollY < 50
            ? (header.classList.remove('scroll'), (header.style.padding = '60px 0'))
            : window.scrollY > scroll
            ? ((header.style.transform = 'translateY(-100%)'), header.classList.remove('scroll'))
            : ((header.style.transform = 'translateY(0)'),
              (header.style.padding = '40px 0'),
              header.classList.add('scroll')));
    scroll = window.scrollY;
});
