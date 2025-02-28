import { graphql } from "gatsby";

export const configQuery = graphql`
    fragment ConfigData on STRAPI_CONFIG {
        phone
        phone_label
        email
        footer_text_1 {
            data {
                footer_text_1
            }
        }
        footer_text_2 {
            data {
                footer_text_2
            }
        }
        home_headline
        home_text {
            data {
                home_text
            }
        }
        impressum {
            label
            value
        }
    }
`;
