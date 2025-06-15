import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Partner = ({ block }) => {
    const Image = ({ image, name }) => (
        <GatsbyImage
            image={getImage(image)}
            alt={name}
            placeholder="blurred"
            layout="fixed"
            height={60}
            imgStyle={{ 'object-position': 'right center' }}
            objectFit="contain"
            className="!w-full"
        />
    );

    return (
        <section id="partners" className={`py-10 ${block.class}`} data-aos="fade-up">
            <div className="container flex flex-wrap justify-around items-center gap-10 px-10 xl:px-20">
                {block.logos && block.logos.map((item, index) => {
                    if (item.localFile.extension == 'svg') {
                        return (
                            <div key={index}>
                                <img src={item.localFile.publicURL} className="h-[60px]" />
                            </div>
                        );
                    }

                    if (item.localFile.childImageSharp) {
                        const image = getImage(item.localFile.childImageSharp);
                        return (
                            <div key={index}>
                                <Image image={image} name={item.alternativeText} />
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        </section>
    );
};

export default Partner;