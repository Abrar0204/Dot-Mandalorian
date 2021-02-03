import React from 'react';
import Episode from './Episode';

const Carousel = ({ season, seasonData }) => {
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
	return (
		<div className={season == 1 ? 'seasonOne' : 'seasonTwo'}>
			<h1>{season == 1 ? 'Season 1' : 'Season 2'}</h1>
			<div className="carousel-holder">
				<div className="left arrow" onClick={scrollLeft}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
					</svg>
				</div>
				<div className={season === 1 ? 'carousel season-one' : 'carousel season-two'}>
					{seasonData.map((episodeData) => <Episode key={episodeData.name} episodeData={episodeData} />)}
				</div>
				<div className="right arrow" onClick={scrollRight}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
