import React from 'react';

const Episodes = () => {
	const scroller = (scrollWidth, season) => {
		if (season === 1) {
			var carousel = document.querySelector('.season-one');
		} else {
			var carousel = document.querySelector('.season-two');
		}

		carousel.scrollLeft += scrollWidth;
	};

	return (
		<section className="episodes" id="episodes">
			<div className="episodes-header">
				<h1>Episodes</h1>
			</div>
			<div className="carousel-holder">
				<div className="left arrow" onClick={() => scroller(-500, 1)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
					</svg>
				</div>
				<div className="carousel season-one">
					<div className="episode one">1</div>
					<div className="episode">2</div>
					<div className="episode">3</div>
					<div className="episode">4</div>
					<div className="episode">5</div>
					<div className="episode">6</div>
					<div className="episode">7</div>
					<div className="episode">8</div>
				</div>
				<div className="right arrow" onClick={() => scroller(300, 1)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
					</svg>
				</div>
			</div>
			<div className="carousel-holder">
				<div className="left arrow" onClick={() => scroller(-500, 2)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
					</svg>
				</div>
				<div className="carousel season-two">
					<div className="episode one">1</div>
					<div className="episode">2</div>
					<div className="episode">3</div>
					<div className="episode">4</div>
					<div className="episode">5</div>
					<div className="episode">6</div>
					<div className="episode">7</div>
					<div className="episode">8</div>
				</div>
				<div className="right arrow" onClick={() => scroller(300, 2)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Episodes;
