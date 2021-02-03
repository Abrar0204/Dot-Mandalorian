import React from 'react';

const Episode = ({ episodeData }) => {
	const { name, episode, description, date } = episodeData;
	return (
		<div key={name} className={episode === 1 ? 'episode one' : episode === 8 ? 'episode eigth' : 'episode'}>
			<p className="title">{`Chapter ${episode}: ${name}`}</p>
			<p className="summary">{description}</p>
			<p className="date">{date}</p>
		</div>
	);
};

export default Episode;
