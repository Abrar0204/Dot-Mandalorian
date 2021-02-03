import React from 'react';
import CarouselArrow from './CarouselArrow';
import Episode from './Episode';

const Carousel = ({ season, seasonData }) => {
	const renderEpisodeList = () =>
		seasonData.map((episodeData) => <Episode key={episodeData.name} episodeData={episodeData} />);

	return (
		<div className={season === 1 ? 'seasonOne' : 'seasonTwo'}>
			<h1>{season == 1 ? 'Season 1' : 'Season 2'}</h1>
			<div className="carousel-holder">
				<CarouselArrow season={season} direction="left" />

				<div className={season === 1 ? 'carousel season-one' : 'carousel season-two'}>
					{renderEpisodeList()}
				</div>

				<CarouselArrow season={season} direction="right" />
			</div>
		</div>
	);
};

export default Carousel;
