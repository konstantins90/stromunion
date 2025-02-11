import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faCircleCheck
} from "@fortawesome/free-regular-svg-icons"

const dataQuery = graphql`
query GetServices {
    allStrapiService (
    sort: {
        strapi_id:ASC
    }
    ) {
        nodes {
            id
            strapi_id
            name
            description {
                data {
                    description
                }
            }
            Bulletpoint {
                name
            }
            Image {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            width: 600
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                            aspectRatio: 1.5
                        )
                    }
                }
            }
        }
    }
}
`

const Services = () => {
    const sourceData = useStaticQuery(dataQuery)
    const services = sourceData.allStrapiService.nodes

    const Image = ({ image, name }) => (
        <GatsbyImage
            image={getImage(image)}
            alt={name}
            placeholder="blurred"
            layout="constrained"
            width={700}
            imgStyle={{ 'object-position': 'right center' }}
            objectFit="cover"
            className="rounded-xl"
        />
    );

    return (
        <div id="services" className="">
            {services.map(function(service, index) {
                return (
                    <div className={`service ${index % 2 !== 0 ? "bg-black text-white" : ""}`} data-aos="fade-up">
                        <div className="container flex py-20">
                            <div className="flex items-center justify-center gap-20 py-10">
                                <div className="flex-1">
                                    <Image image={service.Image.localFile} name={service.name} />
                                </div>
                                <div className={`flex-1 ${index % 2 !== 0 ? "-order-1" : ""}`}>
                                    <div className="headline text-xl xl:text-3xl line">
                                        { service.name }
                                    </div>
                                    <div className="description font-light text-xl mt-6">
                                        { service.description.data.description }
                                    </div>
                                    <div className="service mt-10">
                                        {service.Bulletpoint.map(function(item, index) {
                                            return (
                                                <div className="mt-2">
                                                    <FontAwesomeIcon icon={faCircleCheck} size="1x" className="w-5 h-5 mr-2 text-stromRed" /> { item.name }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Services