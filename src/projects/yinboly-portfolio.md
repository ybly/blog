---
title: 'Personal Portfolio Website'
date: '2024-05-14'
slug: '/projects/portfolio'
stack: 'React, Gatsby, Graphql'
description: 'Personal Portfolio Website.'
githubRepo: 'https://github.com/ybly/yinboly.com'
---

[yinboly.com](https://www.yinboly.com) is my personal portfolio website where I share my projects tutorials, and more. Visit for updates and explore the projects page to see highlights on my personal projects.

## 🧐 What's inside?

A quick look at the top-level files and directories in this project.

    .
    ├── src/
    │   ├── components/
    │   │    └── ...
    │   ├──pages/
    │   │   └── index.js
    │   │   └── 404.js
    │   │   └── ...
    │   ├── projects/
    │   │   └── ...
    │   ├── styles/
    │   │   └── global.css
    │   │   └── ...
    │   └── templates/
    │       └── ...
    │
    ├──static/
    │   └── ...
    │
    ├── .gitignore
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package.json
    ├── package-lock.json
    └── README.md

- **_`/src`_**: This directory will contain all of the code related to what you see on the front-end of the site.
- **_`/src/components`_**: This directory will contain all of the react components used in the front-end.
- **_`/src/pages`_**: This directory contains all the individual pages for the website.
- **_`/src/pages/index.js`_**: Homepage and main entry point of the website.
- **_`/src/pages/404.js`_**: Customised 404 not found page when an invalid route is attempted.
- **_`/src/projects`_**: This directory contains all the project markdown files which will be used to construct the content for project pages.
- **_`/src/styles`_**: This directory contains global and page specific css modules.
- **_`/src/templates`_**: This directory contains page specific templates styles used in generating static pages.
- **_`/static`_**: This directory contains static images and icons used in the front-end.

- **_`gatsby-config.js`_**: This is the main configuration file for a Gatsby site. This is where specific information about the site (metadata) like title, description and which Gatsby plugins are included, etc... Check out the [Gatsby Config Docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail.

- **_`gatsby-node.js`_**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

we use `gatsby-transformer-filesystem` and `gatsby-transformer-remark` plugins to parse project markdown files to create static project detail pages during the build process using page template setup in `src/template`.

- **_`package.json`_**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

## ⚡Gatsby Plugins Used

- **`gatsby-source-filesystem`**: Plugin used for sourcing data into your Gatsby application from your local filesystem.

- **`gatsby-transformer-remark`**: Parses Markdown files using [remark](https://remark.js.org/).

- **`gatsby-remark-prismjs`**: Adds syntax highlighting to code blocks in markdown files using [PrismJS](https://prismjs.com/).

- **`gatsby-plugin-manifest`**: The manifest provides configuration and icons.

## 🎓 Learning Gatsby

** [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/docs/tutorial/getting-started/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

**To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 🚀 Deploy

This site is deployed and hosted on [Netlify](https://netlify.com)
