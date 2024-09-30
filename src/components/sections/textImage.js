import React, { useEffect, useState } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import * as runtime from "react/jsx-runtime"
import { compileSync, runSync } from "@mdx-js/mdx"

function compileMDX(mdx) {
    const code = String(
        compileSync(mdx, {
            outputFormat: "function-body",
            development: false,
        })
    );

    return code;
}

const TextImage = ({ id, text, image}) => {
    const [content, setContent] = useState();

    useEffect(() => {
        const code = compileMDX(text);

        const { default: Content } = runSync(code, runtime);
        setContent(Content());
    }, []);

    return (
        <section id={id}>
            <div className="wrap bg-black text-white py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="md:w-5/12" data-aos="fade-up">
                        {content && content}
                    </div>
                    {image && (
                        <div className="md:w-7/12 flex justify-end" data-aos="fade-up">
                            <GatsbyImage
                                image={image}
                                alt="Image description"
                                className="rounded-lg shadow-lg"
                                width="250"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default TextImage
