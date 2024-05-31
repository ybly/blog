import React from 'react';
import Layout from '../../components/Layout';

// import * as styles from '../../styles/project.module.css';
import { graphql } from 'gatsby';

import List from '../../components/List';

const groupPostsByYear = (posts) => {
	let datesByYear = {};

	posts.forEach((proj) => {
		let year = proj.frontmatter.date.split('-')[0];

		if (!datesByYear[year]) {
			datesByYear[year] = [];
		}

		datesByYear[year].push(proj);
	});

	return datesByYear;
};

export default function Posts({ data }) {
	const posts = data.posts.nodes;

	const postsGroupedByYear = groupPostsByYear(posts);
	const years = Object.keys(postsGroupedByYear).sort((a, b) => b - a);

	return (
		<Layout>
			<section>
				<h1>Posts</h1>
			</section>
			<div>
				{years.map((year) => {
					return (
						<div key={`${year}-posts`} style={{ marginTop: '4rem' }}>
							<h2>{year}</h2>
							<List listItems={postsGroupedByYear[year]} />
						</div>
					);
				})}
			</div>
		</Layout>
	);
}

export const getPosts = graphql`
	query postsQuery {
		posts: allMarkdownRemark(
			filter: {
				frontmatter: { display: { eq: true }, slug: { regex: "/^/posts/" } }
			}
			sort: { frontmatter: { date: DESC } }
		) {
			nodes {
				frontmatter {
					title
					stack
					slug
					githubRepo
					description
					date
				}
				id
			}
		}
	}
`;
