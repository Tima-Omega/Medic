
const intro = new Swiper('.intro__slider', {
	effect: 'fade',
	pagination: {
		el: '.intro__pagination',
		clickable: true
	  },
});

const gallery = new Swiper('.gallery__slider', {
	spaceBetween: 25,
	slidesPerView: 1,
	loop: true,
	breakpoints: {
		576: {
			slidesPerView: 2,
		}
	},
	pagination: {
		el: '.gallery__pagination',
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
});

const burger = document.querySelector('.header__menu')
const burgerText = burger.querySelector('p')
const menu = document.querySelector('.menu')
const logo = document.querySelector('.header__logo')
burger.addEventListener('click', function() {
	this.classList.toggle('active');
	menu.classList.toggle('active')
	logo.classList.toggle('active')
	if(this.classList.contains('active')) {
		burgerText.textContent = 'Закрыть';
		document.body.style.overflow = 'hidden'
	} else {
		burgerText.textContent = 'Меню';
		document.body.style.overflow = 'auto'
	}
})