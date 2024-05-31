import React from 'react';
import { Link } from 'gatsby';

import * as style from './list.module.css';

export default function List({ listItems = [] }) {
	return (
		<div>
			<div className={style.list}>
				{listItems.map((item) => (
					<Link
						className={style.listItem}
						key={item.id}
						to={item.frontmatter.slug}
					>
						<h3>{item.frontmatter.description}</h3>
						<span className="date-format">
							{formatDateString(item.frontmatter.date)}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
}

const formatDateString = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long' });
};
