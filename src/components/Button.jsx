import React from 'react';
import { Link } from 'gatsby';

import * as style from '../styles/button.module.css';

export function Button({ children, onClick = null }) {
	return (
		<button type="button" className={style.button} onClick={onClick}>
			{children}
		</button>
	);
}

export function GatsbyLinkButton({ children, to }) {
	return (
		<Link to={to} className={style.button}>
			{children}
		</Link>
	);
}
