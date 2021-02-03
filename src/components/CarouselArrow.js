import React from 'react';

const CarouselArrow = ({ direction, season }) => {
	const scrollLeft = () => {
		if (season === 1) {
			var carousel = document.querySelector('.season-one');
		} else {
			var carousel = document.querySelector('.season-two');
		}

		carousel.scrollLeft -= 370;
	};
	const scrollRight = () => {
		if (season === 1) {
			var carousel = document.querySelector('.season-one');
		} else {
			var carousel = document.querySelector('.season-two');
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
