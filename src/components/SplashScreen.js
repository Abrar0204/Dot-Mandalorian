import React from 'react';
import { motion } from 'framer-motion';
const SplashScreen = () => {
	const pathVariants = {
		hidden: {
			pathLength: 0,
			opacity: 0
		},
		visible: {
			pathLength: 1,

			opacity: 1,
			transition: {
				duration: 3
			}
		}
	};
	const svgVariants = {
		hidden: {},
		visible: {}
	};
	const splashVariant = {
		hidden: {
			y: 0
		},
		visible: {
			y: '-100vh',
			transition: {
				delay: 3.5,
				ease: 'easeOut'
			}
		}
	};
	return (
		<motion.div variants={splashVariant} initial="hidden" animate="visible" className="splash-screen">
			<motion.svg
				variants={svgVariants}
				initial="hidden"
				animate="visible"
				width="427"
				height="498"
				viewBox="0 0 427 498"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					variants={pathVariants}
					d="M4 216.5L9 427.5L25.5 436L17.5 188L4 216.5Z"
					stroke="white"
					stroke-width="7"
				/>
				<motion.path
					variants={pathVariants}
					d="M204.5 5C72.1004 5 40.3338 114 41.0004 168.5C143.401 159.7 313.667 164.833 386 168.5C380.667 114 336.9 5 204.5 5Z"
					stroke="white"
					stroke-width="10"
				/>
				<motion.path
					variants={pathVariants}
					d="M98 326.004C73.6 326.404 49.8333 405.504 41 445.004L152.5 480.504C146.5 378.504 128.5 325.504 98 326.004Z"
					stroke="white"
					stroke-width="10"
				/>
				<motion.path
					variants={pathVariants}
					d="M329.5 326.004C353.9 326.405 377.667 405.759 386.5 445.386L275 481C281 378.672 299 325.502 329.5 326.004Z"
					stroke="white"
					stroke-width="10"
				/>
				<motion.path
					variants={pathVariants}
					d="M402 435.5L409.5 190L422.5 216L418 426.5L402 435.5Z"
					stroke="white"
					stroke-width="7"
				/>
				<motion.path
					variants={pathVariants}
					d="M175.5 245L186 490.5L169 486C166.5 420.5 150.5 320.5 123.5 292.5C101.9 270.1 56.1667 256.5 37.5 252.5L33.5 188C187.9 177.2 343.833 183.5 395 188L387 252.5C381.667 253.333 357.7 260.2 316.5 281C275.3 301.8 258.333 426.333 255 486L239 490.5L251.5 245C292.7 243 345.333 229.667 369 223V209C212.2 201.4 95.3333 205.833 52.5 209V222C75.3 231.2 143 241.333 175.5 245Z"
					stroke="white"
					stroke-width="10"
				/>
			</motion.svg>
		</motion.div>
	);
};

export default SplashScreen;
