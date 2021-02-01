import React from 'react';

const CharacterCard = ({ character, setSelected }) => {
	const { name, image, className } = character;

	return (
		<div className="characters-card" onClick={() => setSelected(character)}>
			<img src={image} alt={name} className={className} />
			<p className="title">{name}</p>
		</div>
	);
};

export default CharacterCard;
