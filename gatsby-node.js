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
			allMarkdownRemark {
				nodes {
					frontmatter {
						title
						stack
						path
						githubRepo
						description
						date
					}
				}
			}
		}
	`);

	data.allMarkdownRemark.nodes.forEach((node) => {
		createPage({
			path: `${node.frontmatter.path}`,
			component: path.resolve('./src/templates/project-detail.js'),
			context: {
				title: node.frontmatter.title,
				stack: node.frontmatter.stack,
				path: node.frontmatter.path,
			},
		});
	});
};
