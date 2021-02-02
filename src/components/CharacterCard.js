import React from 'react';
import { motion, useCycle } from 'framer-motion';

const CharacterCard = ({ character, selected, selectedIcon, setSelected, setSelectedIcon, cardAnimation }) => {
	const { name, image, className } = character;

	const imageVariant = {
		hidden: {
			scale: 1
		},
		hover: {
			scale: 0.9,
			transition: { duration: 0.2, ease: 'easeOut' }
		}
	};
	const textVariants = {
		hidden: { x: -20, opacity: 0 },
		hover: { x: 0, opacity: 1 }
	};

	const switchCharacter = async () => {
		if (selected.name !== character.name) {
			setSelectedIcon(character.name);
			await cardAnimation.start('hidden');

			setSelected(character);
			await cardAnimation.start('visible');
		}
	};

	return (
		<motion.div
			initial="hidden"
			whileHover="hover"
			animate={selectedIcon === name ? 'hover' : {}}
			className="characters-card"
			onClick={switchCharacter}
		>
			<div className="backdrop" />
			<motion.img variants={imageVariant} src={image} alt={name} className={className} />
			<motion.p variants={textVariants} className="title">
				{name}
				<span className="backdrop" />
			</motion.p>
		</motion.div>
	);
};

export default CharacterCard;
