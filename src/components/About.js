import React, { useEffect } from 'react';
import AboutHeader from '../res/images/mando 2.png';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import grogu from '../res/svgs/grogu.svg';
import GroguIcon from './GroguIcon';
const About = () => {
	const animation = useAnimation();
	const [ ref, inView, entry ] = useInView({ threshold: 0.1 });

	useEffect(
		() => {
			if (inView) {
				animation.start('visible');
				// console.log('vsisble about');
			} else {
				animation.start('hidden');
				// console.log('hidden about');
			}
		},
		[ animation, inView ]
	);

	const imageBackdropVariants = {
		hidden: {
			width: '100%'
		},
		visible: {
			width: '0%'
		}
	};
	const imageBackdropTransition = {
		duration: 0.8,
		type: 'tween',
		ease: 'easeOut'
	};

	const lineVariants = {
		hidden: {
			opacity: 0,
			height: 0
		},
		visible: {
			opacity: 1,
			height: '20%',
			transition: {
				duration: 0.5,
				ease: 'easeOut'
			}
		}
	};
	const textVariants = {
		hidden: {
			opacity: 0,
			y: 30
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5,
				duration: 0.7,
				ease: 'easeOut'
			}
		}
	};

	const backdropOverContentDiv = () => {
		return (
			<motion.span
				className="backdrop"
				ref={ref}
				initial="hidden"
				variants={imageBackdropVariants}
				animate={animation}
				transition={imageBackdropTransition}
			/>
		);
	};

	return (
		<section className="about" id="about">
			<div className="about-header">
				<h1>About{backdropOverContentDiv()}</h1>
				<p>
					Hello There, welcome to Dot Mandalorian where you can find all stuff related to the disney plus
					series The Mandalorian.
					{backdropOverContentDiv()}
				</p>
			</div>
			<div className="about-image-container">
				{/* <motion.div
					className="backdrop"
					ref={ref}
					initial="hidden"
					variants={imageBackdropVariants}
					animate={animation}
					transition={imageBackdropTransition}
				/> */}
			</div>
			<div className="about-description">
				<motion.div variants={lineVariants} initial="hidden" animate={animation} ref={ref} className="line" />
				{/* <motion.img ref={ref} variants={textVariants} initial="hidden" animate={animation} src={grogu} /> */}
				<GroguIcon ref={ref} inView={inView} />
				<motion.p ref={ref} variants={textVariants} initial="hidden" animate={animation}>
					Beginning five years after the events of Return of the Jedi and the fall of the Galactic Empire, The
					Mandalorian follows Din Djarin, a lone Mandalorian bounty hunter in the outer reaches of the galaxy.
				</motion.p>
				<motion.p ref={ref} variants={textVariants} initial="hidden" animate={animation}>
					He is hired by remnant Imperial forces to retrieve the child Grogu, but instead goes on the run to
					protect the infant. While looking to reunite Grogu with his kind, they are pursued by Moff Gideon,
					who wants to use Grogu's connection to the Force.
				</motion.p>
				<div className="line" />
			</div>
		</section>
	);
};

export default About;
{
	/* <div className="backdrop" />
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
					 
				</div>
			</div>  */
}
