import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf
} from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Box = ({ block }) => {
    return (
        <section id="step-by-step" className="py-10 bg-black">
            <div className="container py-20 text-zinc-200" data-aos="fade-up">
                <h3 className='text-4xl md:text-6xl font-light line'>
                    { block.headline }
                </h3>
                <p className='mt-8 text-xl font-light'>
                    <ReactMarkdown children={block.text.data.text} rehypePlugins={[rehypeRaw]} />
                </p>
                <div id="visions" className="flex flex-col md:flex-row mt-16 gap-10">
                    {block.box && block.box.map((item, index) => {
                        return (
                            <div className="vision flex-1 px-8 py-10 bg-zinc-900 rounded-xl" data-aos="fade-up">
                                <div className="flex flex-col text-left">
                                    <div className="step-title text-lg pb-4">
                                        <FontAwesomeIcon icon={faLeaf} size="2x" className="w-6 h-6 mr-2 text-stromRed relative" /> { item.headline }
                                    </div>
                                    <div className="step-description font-light">
                                        <ReactMarkdown children={item.text.data.text} rehypePlugins={[rehypeRaw]} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Box;