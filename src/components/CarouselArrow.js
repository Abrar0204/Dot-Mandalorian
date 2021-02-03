import React from 'react';

const CarouselArrow = ({ direction, season }) => {
	const scrollLeft = () => {
		let carousel;
		if (season === 1) {
			carousel = document.querySelector('.season-one');
		} else {
			carousel = document.querySelector('.season-two');
		}

		if (carousel.scrollLeft === 0) {
			carousel.scrollLeft += carousel.scrollWidth;
		}

		carousel.scrollLeft -= 370;
	};
	const scrollRight = () => {
		let carousel;
		if (season === 1) {
			carousel = document.querySelector('.season-one');
		} else {
			carousel = document.querySelector('.season-two');
		}

		if (carousel.scrollWidth - carousel.clientWidth - carousel.scrollLeft < 3) {
			carousel.scrollLeft -= carousel.scrollLeft;
		}

		carousel.scrollLeft += 370;
	};
	return direction === 'left' ? (
		<div className="left arrow" onClick={scrollLeft}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			</svg>
		</div>
	) : (
		<div className="right arrow" onClick={scrollRight}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
			</svg>
		</div>
	);
};

export default CarouselArrow;
