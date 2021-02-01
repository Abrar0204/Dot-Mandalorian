import React, { useState } from 'react';
import data from '../data/data';
import CharacterCard from './CharacterCard';
const Character = () => {
	const [ selected, setSelected ] = useState(data[0]);
	const { id, name, image, description, playedBy, className } = selected;

	return (
		<section className="characters">
			<div className="characters-description">
				<h1>{name}</h1>
				<p>{description}</p>
			</div>
			<div className="characters-image">
				<img src={image} className={className} />
			</div>
			<div className="characters-selector">
				{data.map((character) => (
					<CharacterCard character={character} key={character.name} setSelected={setSelected} />
				))}
			</div>
		</section>
	);
};

export default Character;
