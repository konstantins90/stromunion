import { graphql } from "gatsby";

export const pageFragment = graphql`
    fragment PageData on STRAPI_PAGE {
        id
        name
        slug
        template
        publishedAt
        class
        content {
            __typename
            ...ContentTeaserData
            ...ContentMetroHomeData
            ...ContentMapData
            ...ContentTextScrollData
            ...ContentPartnerData
        }
    }
    
    fragment ContentTeaserData on STRAPI__COMPONENT_CONTENT_TEASER {
        headline
        subline {
            data {
                subline
            }
        }
        text {
            data {
                text
            }
        }
    }

    fragment ContentMetroHomeData on STRAPI__COMPONENT_CONTENT_METRO_HOME {
        box_1 {
            data {
                box_1
            }
        }
        box_2
        box_3 {
            data {
                box_3
            }
        }
        box_4 {
            data {
                box_4
            }
        }
    }

    fragment ContentMapData on STRAPI__COMPONENT_CONTENT_KARTE {
        headline
        headline_2
        project_max
        button_1 {
            name
            link 
        }
        button_2 {
            name
            link 
        }
        link_to_projects {
            name
            link
        }
    }

    fragment ContentTextScrollData on STRAPI__COMPONENT_CONTENT_TEXT_SCROLL {
        scrollHeadline: headline {
            data {
                headline
            }
        }
        scrollText: text {
            data {
                text
            }
        }
        image_1 {
            localFile {
                childImageSharp {
                    gatsbyImageData(
                        width: 150
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        aspectRatio: 1
                    )
                }
            }
        }
        image_2 {
            localFile {
                childImageSharp {
                    gatsbyImageData(
                        width: 150
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        aspectRatio: 1
                    )
                }
            }
        }
    }

    fragment ContentPartnerData on STRAPI__COMPONENT_CONTENT_PARTNERS {
        class
        logos {
            localFile {
                extension
                publicURL
                childImageSharp {
                    gatsbyImageData(
                        height: 60
                        placeholder: BLURRED
                        formats: [AUTO]
                    )
                }
            }
        }
    }
`;
