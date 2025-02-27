import React from 'react'
import { graphql } from "gatsby";
import { pageFragment } from "../queries/pageFragments.js";
import Layout from "../components/layout.js"
import Banner from '../components/banner.js'
import DynamicComponent from "../components/dynamicComponent.js";

const PageTemplate = ({ data }) => {
    const page = data.strapiPage;
    console.log(page);

    return (
        <Layout>
            <Banner />
            {page.content.map((block, index) => {
                return <DynamicComponent key={index} block={block} template={page.template} />
            })}
        </Layout>
    );
};

export const query = graphql`
    query($id: String!) {
        strapiPage(id: { eq: $id }) {
            ...PageData
        }
    }
`;

export default PageTemplate;
