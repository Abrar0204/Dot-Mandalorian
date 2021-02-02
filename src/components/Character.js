import React, { useEffect, useState } from 'react';
import data from '../data/data';
import { useInView } from 'react-intersection-observer';
import CharacterCard from './CharacterCard';
import { motion, useAnimation } from 'framer-motion';
const Character = () => {
	const [ selected, setSelected ] = useState(data[0]);
	const [ ref, inView, entry ] = useInView({ threshold: 0.1 });
	const animation = useAnimation();
	const { id, name, image, description, playedBy, className } = selected;

	useEffect(
		() => {
			if (inView) {
				// console.log('visble');
				animation.start('visible');
			} else {
				animation.start('hidden');
				// console.log('hidede');
			}
		},
		[ animation, inView ]
	);

	const selectorVariants = {
		hidden: {
			x: -200,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: 'easeOut'
			}
		}
	};
	const descriptionVariants = {
		hidden: {
			x: 200,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: 'easeOut'
			}
		}
	};

	return (
		<section className="characters" id="characters">
			<motion.div
				ref={ref}
				initial="hidden"
				variants={descriptionVariants}
				animate={animation}
				className="characters-description"
			>
				<h1>{name}</h1>
				<p>{description}</p>
				<div className="played">
					<p>{name === 'Kuiil' || name === 'IG-11' ? 'Voiced' : 'Portrayed'} By</p>
					<p>{playedBy}</p>
				</div>
			</motion.div>
			<motion.div
				ref={ref}
				initial="hidden"
				variants={descriptionVariants}
				animate={animation}
				className="characters-image"
			>
				<img src={image} className={className} />
			</motion.div>
			<motion.div
				className="characters-selector"
				ref={ref}
				initial="hidden"
				variants={selectorVariants}
				animate={animation}
			>
				{data.map((character) => (
					<CharacterCard
						character={character}
						key={character.name}
						setSelected={setSelected}
						selected={selected}
					/>
				))}
			</motion.div>
		</section>
	);
};

export default Character;
