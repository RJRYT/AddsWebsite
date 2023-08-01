const weExcel = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const square = entry.target.querySelectorAll('.row');

		square.forEach(item => {
			if (entry.isIntersecting) {
				item.classList.add('fadeInUp');
				return; // if we added the class, exit the function
			}

			// We're not intersecting, so remove the class!
			item.classList.remove('fadeInUp');
		})
	});
});

weExcel.observe(document.querySelector('#services'));

const about = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const square = entry.target.querySelectorAll('.card');

		square.forEach(item => {
			if (entry.isIntersecting) {
				item.classList.add('fadeInUp');
				return; // if we added the class, exit the function
			}

			// We're not intersecting, so remove the class!
			item.classList.remove('fadeInUp');
		})
	});
});

about.observe(document.querySelector('#about'));

const projects = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const square = entry.target.querySelectorAll('.card-anim');

		square.forEach(item => {
			if (entry.isIntersecting) {
				item.classList.add('fadeInUp');
				return; // if we added the class, exit the function
			}

			// We're not intersecting, so remove the class!
			item.classList.remove('fadeInUp');
		})
	});
});

projects.observe(document.querySelector('#projects'));

jQuery(document).ready(function ($) {
	"use strict";

	if ($('.owl-projects').length) {
		$('.owl-projects').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			items: 1,
			margin: 10,
			autoplay: true,
			smartSpeed: 700,
			autoplayTimeout: 4000,
			autoplayHoverPause:false,
			responsive: {
				0: {
					items: 1,
					margin: 2
				},
				460: {
					items: 1,
					margin: 5
				},
				576: {
					items: 3,
					margin: 10
				},
				992: {
					items: 3,
					margin: 10
				}
			}
		})
	}
})

function HidePreload() {
    const x = document.getElementById("preloader");
    let op = 100;
    const id = setInterval(frame, 20);
    function frame() {
        if (op == 0) {
            clearInterval(id);
            x.remove();
        }
        else {
            op--;
            x.style.opacity = `${op}%`
        }
    }
}