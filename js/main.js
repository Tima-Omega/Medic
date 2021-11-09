// const num = 5;
// const str = 'qqq';
// const bool = false;
// const nul = null;
// const undif = undefined;
// const obj = {};
// // const arr = [];
// const func = function(){};

// const sum = 5 + 5;

// const concat = 'tu' * 'ma';

// // console.log(typeof concat)

// const f = function(x, y) {
// 	return x + y
// }

// const ff = function(nick) {
// 	return this.name + ' ' + nick
// }

// const o = {
// 	name: 'Tuma',
// 	sum: f,
// 	nickname: ff
// }

// // console.log(o.name)

// const oo = {
// 	user: o
// }

// const ooo = {
// 	name: 'Shoma',
// 	nic: ff
// }

// const arr = [1, 2, 7, 3, 8];


// // console.log(arr.length)

// // console.log(ooo.nic('Aristocr2t'))

// // console.log(o.name)

// // console.log(oo.user.nickname('Omega'))


// const fff = function() {
// 	return this[this.length - 1]
// }

// // arr.last = fff;

// Array.prototype.last = fff;

// console.log(arr.last())

// arr.push('dick')

// console.log(arr.last())

// const a = [5];

// console.log(a.last())

// // console.log(arr[3]);

// class Car {
// 	constructor (color) {
// 		this.color = color
// 		this.probeg = 0
// 	}
// 	run() {
// 		this.probeg++
// 	}
// }

// const car = new Car ('red') 

// car.run()
// car.run()

// Car.prototype.run = function() {
// 	this.probeg--
// }

// car.run()
// car.run()
// car.run()

// console.log(car)

const intro = new Swiper('.intro__slider', {
	effect: 'fade',
	pagination: {
		el: '.intro__pagination',
		clickable: true
	  },
});

const gallery = new Swiper('.gallery__slider', {
	spaceBetween: 25,
	slidesPerView: 2,
	loop: true,
	pagination: {
		el: '.gallery__pagination',
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
});