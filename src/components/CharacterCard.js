import React from 'react';
import { motion, useCycle } from 'framer-motion';

const CharacterCard = ({ character, selected, setSelected }) => {
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

	return (
		<motion.div
			initial="hidden"
			whileHover="hover"
			animate={selected.name === name ? 'hover' : {}}
			className="characters-card"
			onClick={() => setSelected(character)}
		>
			<div className="backdrop" />
			<motion.img variants={imageVariant} src={image} alt={name} className={className} />
			<motion.p variants={textVariants} className="title">
				{name}
			</motion.p>
		</motion.div>
	);
};

export default CharacterCard;
