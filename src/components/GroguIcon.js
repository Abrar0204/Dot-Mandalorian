import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const GroguIcon = ({ ref, inView }) => {
	const animation = useAnimation();

	useEffect(
		() => {
			if (inView) animation.start('visible');
			else animation.start('hidden');
		},
		[ animation, inView ]
	);
	const svgVariants = {
		hidden: {
			opacity: 1
		},
		visible: {
			opacity: 1
		}
	};

	const pathVariants = {
		hidden: {
			pathLength: 0,
			opacity: 0
		},
		visible: {
			pathLength: 1,
			opacity: 1,
			transition: {
				duration: 2,
				ease: 'easeInOut'
			}
		}
	};

	return (
		<motion.svg
			ref={ref}
			variants={svgVariants}
			initial="hidden"
			animate={animation}
			width="46"
			height="42"
			viewBox="0 0 46 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M33.9229 15.042C35.4869 16.53 36.9399 19.169 37.9449 21.282"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M34.79 28.414C35.288 29.363 36.434 30.958 38.229 30.115C40.085 29.243 39.167 27.069 38.585 26.025"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M33.5068 22.944L38.6168 21.03C39.1908 20.815 39.8298 21.106 40.0448 21.68L40.9038 23.972C41.1188 24.546 40.8278 25.185 40.2538 25.4L34.5828 27.525"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M12.0767 15.042C10.5127 16.53 9.05969 19.169 8.05469 21.282"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M11.2098 28.414C10.7118 29.363 9.56585 30.958 7.77085 30.115C5.91485 29.243 6.83285 27.069 7.41485 26.025"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M12.4932 22.944L7.38321 21.03C6.80921 20.815 6.17021 21.106 5.95521 21.68L5.09621 23.972C4.88121 24.546 5.17221 25.185 5.74621 25.4L11.4172 27.525"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M32.3274 17.917L36.7534 36.771C36.9004 37.897 36.2214 38.97 35.1354 39.301C32.8674 39.991 27.6024 41 23.0004 41C18.3984 41 13.1334 39.991 10.8664 39.3C9.78044 38.969 9.10144 37.896 9.24844 36.77L13.6744 17.916"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M30.6895 4.096C31.5405 3.324 32.7955 3 34.0005 3H45.0005C45.0005 3 39.0005 10 32.0005 10"
				stroke="white"
				strokeMiterlimit="10"
				strokeLinejoin="round"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M15.311 4.096C14.46 3.324 13.205 3 12 3H1C1 3 7 10 14 10"
				stroke="white"
				strokeMiterlimit="10"
				strokeLinejoin="round"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M14.3739 10.437C13.8489 9.584 13.5449 8.598 13.5449 7.5C13.5449 3.511 16.6969 1 22.9999 1C29.3029 1 32.4549 3.511 32.4549 7.5C32.4549 8.597 32.1519 9.583 31.6279 10.435"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M24 10C24 10.552 23.552 11 23 11C22.448 11 22 10.552 22 10H24Z"
				fill="#F5F5F5"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M34 15.9999C34 19.2999 23 19.4999 23 19.4999C23 19.4999 12 19.2999 12 15.9999C12 13.6699 12.11 9.44995 13.83 10.1699C15.64 10.9199 17.17 12.9999 23 12.9999C28.83 12.9999 30.36 10.9199 32.17 10.1699C33.89 9.44995 34 13.6699 34 15.9999Z"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M20.667 40.927L20 19"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M26 19L25.333 40.927"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M25.804 12.922C25.804 12.922 25.334 19.723 20.667 19.361"
				stroke="white"
				strokeMiterlimit="10"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M22 8.21008C22 5.44047 18.0003 5.44047 17 7.28662C17 8.21008 20.0002 10.0562 22 8.21008Z"
				fill="#F5F5F5"
			/>
			<motion.path
				variants={pathVariants}
				initial="hidden"
				animate={animation}
				d="M24 8.20935C24 5.43973 27.9997 5.43973 29 7.28589C29 8.20935 25.9998 10.0555 24 8.20935Z"
				fill="#F5F5F5"
			/>
		</motion.svg>
	);
};

export default GroguIcon;
