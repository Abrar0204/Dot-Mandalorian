import React, { useEffect } from 'react';
import AboutHeader from '../res/images/mando.png';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
const About = () => {
	const animation = useAnimation();
	const [ ref, inView, entry ] = useInView({ threshold: 0.1 });

	useEffect(
		() => {
			if (inView) {
				animation.start('visible');
			} else {
				animation.start('hidden');
			}
		},
		[ animation, inView ]
	);

	const imageBackdropVariants = {
		hidden: {
			height: 0
		},
		visible: {
			height: '40%'
		}
	};
	const imageBackdropTransition = {
		duration: 0.5,
		type: 'tween',
		ease: 'easeIn'
	};

	const imageVariants = {
		hidden: {
			y: 10,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1
		}
	};

	return (
		<div className="about">
			<div className="backdrop" />
			<div className="about-image-container">
				<motion.img
					ref={ref}
					variants={imageVariants}
					animate={animation}
					initial="hidden"
					transition={imageBackdropTransition}
					className="about-image"
					src={AboutHeader}
				/>
				<motion.div
					ref={ref}
					initial="hidden"
					variants={imageBackdropVariants}
					animate={animation}
					transition={imageBackdropTransition}
					className="image-backdrop"
				/>
			</div>
			<div className="about-header-container">
				<h2 className="about-header">about</h2>
				<h1 className="about-header">The MaNDALoRIaN</h1>
			</div>
			<div className="about-description">
				<div className="about-description-text">
					<p>
						Beginning five years after the events of Return of the Jedi and the fall of the Galactic Empire,
						The Mandalorian follows Din Djarin, a lone Mandalorian bounty hunter in the outer reaches of the
						galaxy.
					</p>
					<p>
						He is hired by remnant Imperial forces to retrieve the child Grogu, but instead goes on the run
						to protect the infant. While looking to reunite Grogu with his kind, they are pursued by Moff
						Gideon, who wants to use Grogu's connection to the Force.
					</p>
				</div>
				{/* <div className="backdrop" /> */}
			</div>
		</div>
	);
};

export default About;
