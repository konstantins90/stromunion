const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allStrapiPage {
                nodes {
                    id
                    slug
                }
            }
        }
    `);

    if (result.errors) {
        console.error("GraphQL Query Fehler:", result.errors);
        return;
    }

    const pages = result.data.allStrapiPage.nodes;

    pages.forEach(page => {
        createPage({
            path: page.slug === "home" ? "/" : `/${page.slug}`,
            component: path.resolve("./src/templates/page-template.js"),
            context: {
                id: page.id,
            },
        });
    });
};
