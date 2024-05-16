const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
	reporter.info(`Your Gatsby site has been built!`);
};

// Create project pages dynamically from markdown
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const { data } = await graphql(`
		query projects {
			allMarkdownRemark(filter: { frontmatter: { display: { eq: true } } }) {
				nodes {
					frontmatter {
						title
						date
						slug
						stack
						description
						githubRepo
						display
					}
				}
			}
		}
	`);

	data.allMarkdownRemark.nodes.forEach((node) => {
		createPage({
			path: `${node.frontmatter.slug}`,
			component: path.resolve('./src/templates/project-detail.js'),
			context: {
				slug: node.frontmatter.slug,
			},
		});
	});
};
