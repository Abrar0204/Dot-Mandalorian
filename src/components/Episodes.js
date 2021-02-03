import React from 'react';
import { seasonOne, seasonTwo } from '../data/data';
import Carousel from './Carousel';

const Episodes = () => {
	return (
		<section className="episodes" id="episodes">
			<Carousel season={1} seasonData={seasonOne} />
			<Carousel season={2} seasonData={seasonTwo} />
		</section>
	);
};

export default Episodes;
