import React, { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Teaser = ({ block }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 120);
    const y2 = useParallax(scrollYProgress, 230);

    const Image = ({ image, name }) => (
        <GatsbyImage
            image={getImage(image)}
            alt={name}
            placeholder="blurred"
            layout="constrained"
            width={150}
            height={150}
            imgStyle={{ 'object-position': 'right center' }}
            objectFit="cover"
            className="rounded-xl"
        />
    );

    return (
        <section id="team" className="px-4 pt-32 pb-10" data-aos="fade-up">
            <div ref={ref} className="container max-w-[90%] xl:max-w-[60%] relative">
                <motion.div style={{ y: y }} className="absolute -left-32 top-5 md:top-0 -translate-x-11 -translate-y-16">
                    <Image image={block.image_1.localFile} />
                </motion.div>
                <motion.div style={{ y: y2 }} className="absolute -right-32 top-24 md:top-full -translate-x-11 -translate-y-36">
                    <Image image={block.image_2.localFile} />
                </motion.div>
                <h3 className="relative z-10 md:text-center text-black text-5xl lg:text-7xl">
                    <ReactMarkdown children={block.scrollHeadline.data.headline} rehypePlugins={[rehypeRaw]} />
                </h3>
            </div>
            <div className="container max-w-[90%] xl:max-w-[60%] py-10 text-2xl text-left md:pr-40 font-light relative z-10">
                <ReactMarkdown children={block.scrollText.data.text} rehypePlugins={[rehypeRaw]} />
            </div>
        </section>
    );
};

export default Teaser;