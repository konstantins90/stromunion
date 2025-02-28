import { graphql } from "gatsby";

export const pageFragment = graphql`
    fragment PageData on STRAPI_PAGE {
        id
        name
        slug
        template
        publishedAt
        class
        seo_title
        seo_description
        content {
            __typename
            ...ContentTeaserData
            ...ContentMetroHomeData
            ...ContentMapData
            ...ContentTextScrollData
            ...ContentPartnerData
            ...ContentButtonData
            ...ContentMetroData
            ...ContentBoxData
            ...ContentProjectData
            ...ContentContactData
            ...ContentParallaxData
            ...ContentStepData
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

    fragment ContentButtonData on STRAPI__COMPONENT_CONTENT_RED_BUTTON_LINK {
        headline
        text {
            data {
                text
            }
        }
        link {
            name
            link
        }
    }

    fragment ContentMetroData on STRAPI__COMPONENT_CONTENT_METRO_UEBER_UNS {
        metroBox_1: box_1 {
            data {
                box_1
            }
        }
        metroBox_2: box_2 {
            strapi_json_value {
                year
                kWp
            }
        }
        metroBox_3: box_3 {
            data {
                box_3
            }
        }
        metroBox_4: box_4 {
            data {
                box_4
            }
        }
    }

    fragment ContentBoxData on STRAPI__COMPONENT_CONTENT_BOXEN {
        headline
        text {
            data {
                text
            }
        }
        box {
            headline
            text {
                data {
                    text
                }
            }
        }
    }

    fragment ContentProjectData on STRAPI__COMPONENT_CONTENT_PROJEKTE {
        projectHeadline: headline {
            data {
                headline
            }
        }
    }

    fragment ContentContactData on STRAPI__COMPONENT_CONTENT_KONTAKT {
        phone {
            name
            link
        }
        email {
            name
            link
        }
        map {
            name
            link
        }
    }

    fragment ContentParallaxData on STRAPI__COMPONENT_CONTENT_PARALLAX {
        text {
            data {
                text
            }
        }
        background {
            localFile {
                publicURL
            }
        }
    }

    fragment ContentStepData on STRAPI__COMPONENT_CONTENT_SCHRITTE {
        headline
        text {
            data {
                text
            }
        }
    }
`;
