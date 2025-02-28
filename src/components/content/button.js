import React from "react";
import { Link } from "gatsby";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({ block }) => {
    return (
        <section id="step-by-step" className="py-10 bg-black">
            <div className="container md:max-w-[40%] lg:max-w-[60%] py-10 text-zinc-200 text-center" data-aos="fade-up">
                <h3 className='text-3xl md:text-4xl font-light line inline-block mx-auto'>
                    { block.headline }
                </h3>
                <p className='text-xl font-light mt-10'>
                    <ReactMarkdown children={block.text.data.text} rehypePlugins={[rehypeRaw]} />
                </p>
                <div className='mt-10'>
                    <Link to={block.link.link} id="call-to-action" className="border-[#FF0201] bg-black border-4 transition duration-800 ease-in-out hover:bg-[#FF0201] text-xl md:text-2xl text-zinc-200 py-4 px-8 rounded-full align-middle">
                        {block.link.name} <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="w-5 h-5 md:w-8 md:h-8 ml-5 text-zinc-200 relative" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Button;