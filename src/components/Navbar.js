import React, { useState } from 'react';
import disneyLogo from '../res/svgs/Disney.svg';
import { motion, AnimatePresence } from 'framer-motion';
import menu from '../res/svgs/Menu.svg';

const transition = {
	type: 'tween',
	ease: 'easeOut',
	duration: 0.75
};
const Navbar = () => {
	const [ navExpanded, setNavExpanded ] = useState(false);

	const linkVariant = {
		hidden: {},
		visible: {}
	};

	const linkbackdropVariant = {
		hidden: {
			width: 0,
			opacity: 0
		},
		visible: {
			width: '100%',
			opacity: 1,
			transition: {
				duration: 0.2
			}
		}
	};

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={disneyLogo} alt="Disney Logo" />
			</div>

			<div className="navbar-menu" onClick={() => setNavExpanded(true)}>
				<img src={menu} alt="Menu" />
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
						<div className="close" onClick={() => setNavExpanded(false)}>
							<svg
								width="30"
								height="30"
								xmlns="http://www.w3.org/2000/svg"
								fill="white"
								fillRule="evenodd"
								clipRule="evenodd"
							>
								<path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
							</svg>
						</div>

						<ul className="navbar-list">
							<motion.li
								variants={linkVariant}
								initial="hidden"
								whileHover="visible"
								className="navbar-list-item"
								onClick={() => setNavExpanded(false)}
							>
								<motion.div variants={linkbackdropVariant} className="backdrop" />
								<a href="#home">Home</a>
							</motion.li>
							<motion.li
								variants={linkVariant}
								initial="hidden"
								whileHover="visible"
								className="navbar-list-item"
								onClick={() => setNavExpanded(false)}
							>
								<motion.div variants={linkbackdropVariant} className="backdrop" />
								<a href="#about">About</a>
							</motion.li>
							<motion.li
								variants={linkVariant}
								initial="hidden"
								whileHover="visible"
								className="navbar-list-item"
								onClick={() => setNavExpanded(false)}
							>
								<motion.div variants={linkbackdropVariant} className="backdrop" />
								<a href="#characters">Characters</a>
							</motion.li>
							<motion.li
								variants={linkVariant}
								initial="hidden"
								whileHover="visible"
								className="navbar-list-item"
								onClick={() => setNavExpanded(false)}
							>
								<a href="#episodes">Episodes</a>
								<motion.div variants={linkbackdropVariant} className="backdrop" />
							</motion.li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
