import React, { useState } from 'react';
import disneyLogo from '../res/svgs/Disney.svg';
import hamburger from '../res/svgs/Menu.svg';
import { motion, AnimatePresence, m } from 'framer-motion';

const transition = {
	type: 'tween',
	ease: 'easeOut',
	duration: 0.75
};
const Navbar = () => {
	const [ navExpanded, setNavExpanded ] = useState(false);
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={disneyLogo} alt="Disney Logo" />
			</div>
			<div className="navbar-menu" onClick={() => setNavExpanded(!navExpanded)}>
				<div className={navExpanded ? 'bar one expanded' : 'bar one'} />
				<div className={navExpanded ? 'bar two expanded' : 'bar two'} />
				<div className={navExpanded ? 'bar three expanded' : 'bar three'} />
			</div>
			<AnimatePresence exitBeforeEnter>
				{navExpanded && (
					<motion.div
						className="navbar-left"
						initial={{ x: '-100vw' }}
						animate={{ x: 0 }}
						exit={{ x: '-100vw' }}
						transition={transition}
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{navExpanded && (
					<motion.div
						className="navbar-right"
						initial={{ x: '100vw' }}
						animate={{ x: 0 }}
						exit={{ x: '100vw' }}
						transition={transition}
					>
						<ul className="navbar-list">
							<li className="navbar-list-item">Home</li>
							<li className="navbar-list-item">About</li>
							<li className="navbar-list-item">Characters</li>
							<li className="navbar-list-item">Episodes</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;