import React from 'react';
import Navbar from './Navbar';

import { motion } from 'framer-motion';

import rottenTomatoes from '../res/images/rottenTomatoesFresh.png';
import imdb from '../res/images/imdb.png';

const transition = {
	duration: 1.5
};
const Header = () => {
	return (
		<header className="header">
			<motion.div
				className="header-backdrop left"
				initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
				animate={{ clipPath: 'polygon(0 0, 70% 0%, 25% 100%, 0 100%)', opacity: 0.3 }}
				transition={transition}
			/>
			<motion.div className="header-backdrop filter" />
			<motion.div
				className="header-backdrop right"
				initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
				animate={{ clipPath: 'polygon(60% 0, 100% 0%, 100% 100%, 25% 100%)', opacity: 0.3 }}
				transition={transition}
			/>
			<Navbar />
			<motion.div className="header-content">
				<div className="header-text">
					<h1 className="header-text-large">
						<motion.div animate={{ width: '0%' }} transition={{ duration: 1.5 }} className="backdrop" />
						<span className="the">The</span>
						MaNDALoRIaN
					</h1>
					<p className="header-text-medium">
						<motion.div animate={{ width: '0%' }} transition={{ duration: 1.5 }} className="backdrop" />
						The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority
						of the New Republic. After the stories of Jango and Boba Fett, another warrior emerges in the
						Star Wars universe.
					</p>
				</div>
			</motion.div>
			<motion.div
				className="header-rating"
				initial={{ width: 0 }}
				animate={{ width: '20vw' }}
				transition={{ duration: 1, type: 'tween', ease: 'easeOut' }}
			>
				<div className="item rotten">
					<img src={rottenTomatoes} />
					<div className="item-text">
						<p>93%</p>
					</div>
				</div>
				<div className="item imdb">
					<img src={imdb} />
					<div className="item-text">
						<p>8.8/10</p>
					</div>
				</div>
			</motion.div>

			<div className="scroll">
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, type: 'tween', ease: 'easeIn' }}
					className="scroll-header"
				>
					Scroll
				</motion.p>
				<motion.div
					initial={{ height: 0 }}
					animate={{ height: '8vh' }}
					transition={{ delay: 1.5, type: 'tween', ease: 'easeIn' }}
					className="scroll-line"
				/>
			</div>
		</header>
	);
};

// initial={{ y: 100, opacity: 0 }}
// animate={{ y: 0, opacity: 1, zIndex: 5 }}
// transition={{
// 	type: 'tween',
// 	ease: 'easeOut',
// 	delay: 1.5,
// 	duration: 0.5
// }}

export default Header;
