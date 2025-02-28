import React from 'react'
import { graphql } from "gatsby";
import { pageFragment } from "../queries/pageFragments.js";
import Layout from "../components/layout.js";
import { SEO } from "../components/seo";
import Banner from '../components/banner.js';
import BannerHome from '../components/bannerHome.js';
import DynamicComponent from "../components/dynamicComponent.js";

const PageTemplate = ({ data }) => {
    const page = data.strapiPage;

    return (
        <Layout>
            {page.template === 'home' ? <BannerHome /> : <Banner />}
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

export const Head = ({ data }) => {
    const page = data.strapiPage;

    return (
        <SEO
            title={page.seo_title}
            description={page.seo_description}
        />
    );
}