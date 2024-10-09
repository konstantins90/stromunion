import React, { useEffect, useState } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import * as runtime from "react/jsx-runtime"
import { compileSync, runSync } from "@mdx-js/mdx"
import Video from "../../video/julia-dance-studio-intro.mp4"

function compileMDX(mdx) {
    const code = String(
        compileSync(mdx, {
            outputFormat: "function-body",
            development: false,
        })
    );

    return code;
}

const TextVideo = ({ id, text }) => {
    const [content, setContent] = useState();

    useEffect(() => {
        const code = compileMDX(text);

        const { default: Content } = runSync(code, runtime);
        setContent(Content());
    }, []);

    return (
        <section id={id} className="overflow-hidden">
            <div className="wrap bg-black text-white">
                <div className="container mx-auto flex flex-col md:flex-row items-stretch space-y-6 md:space-y-0 md:space-x-6 relative">
                    <div className="md:w-6/12 pt-10 pb-20" data-aos="fade-up">
                        {content && content}
                    </div>
                    <div className="md:w-6/12 flex flex-col flex-grow relative py-10 md:py-0 z-0">
                        <div className="video-wrap left-0 bottom-0 h-auto max-w-none">
                            <video
                                autoplay="autoPlay" 
                                loop="loop" 
                                muted="muted" 
                                playsinline="playsinline"
                                className="video"
                            >
                                <source src={Video} type="video/mp4" />
                            </video>
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextVideo
