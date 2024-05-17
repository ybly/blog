---
title: 'Personal Portfolio Website'
date: '2024-05-14'
slug: '/projects/portfolio'
stack: 'React, Gatsby, Graphql'
description: 'Personal Portfolio Website.'
githubRepo: 'https://github.com/ybly/yinboly.com'
display: true
---

[![Netlify Status](https://api.netlify.com/api/v1/badges/2dc9185f-7e4e-4882-a58b-61e374490cba/deploy-status)](https://app.netlify.com/sites/yinboly/deploys)

[yinboly.com](https://www.yinboly.com) is my personal portfolio website where I share my projects, tutorials, and more. Visit for updates and explore the projects page to see highlights of my personal projects.

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

- **_`/src/templates`_**: This directory contains page-specific template styles used in generating static pages.

- **_`/static`_**: This directory contains static images and icons used in the front-end.

- **_`gatsby-config.js`_**: This is the main configuration file for a Gatsby site. This is where specific information about the site (metadata) like title, description and which Gatsby plugins are included, etc... Check out the [Gatsby Config Docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail.

- **_`gatsby-node.js`_**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

  > We use the `gatsby-transformer-filesystem` and `gatsby-transformer-remark` plugins to parse project markdown files and create static project detail pages during the build process using a page template set up in `src/template`.

- **_`package.json`_**: A manifest file for Node.js projects, including metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

## ⚡Gatsby Plugins Used

- **`gatsby-source-filesystem`**: Plugin used for sourcing data into your Gatsby application from your local filesystem.

- **`gatsby-transformer-remark`**: Parses Markdown files using [remark](https://remark.js.org/).

- **`gatsby-remark-prismjs`**: Adds syntax highlighting to code blocks in markdown files using [PrismJS](https://prismjs.com/).

- **`gatsby-plugin-manifest`**: The manifest provides configuration and icons.

## 🎓 Learning Gatsby

Full documentation for Gatsby lives on the [gatsbyjs.com](https://www.gatsbyjs.com/).

**To dive straight into code samples, head to the [documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

Great places to start with Gatsby:

1. In-depth _[tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/)_ for creating a site with Gatsby.

2. Gatsby starter used for this site _[gatsby-starter-hello-world](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/)_.

   Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli)) to create a new site, specifying the hello-world starter.

   ```shell
   # create a new Gatsby site using the hello-world starter
   gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
   ```

- **Start developing.**

  Navigate into your new site’s directory and start it up.

  ```shell
  cd my-hello-world-starter/
  gatsby develop
  ```

- **Open the source code and start editing!**

  Your site is now running at `http://localhost:8000`!

  > Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

  Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes, and the browser will update in real time!
