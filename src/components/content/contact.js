import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Contact = ({ block }) => {
    return (
        <section className="contact" data-aos="fade-up">
            <div className="px-5 xl:px-20 py-5 md:py-10">
                <div className='text-lg md:text-2xl mt-10 font-light flex flex-col md:flex-row wrap gap-4 overflow-x-scroll md:overflow-hidden'>
                    <div className='bg-black text-white p-10 rounded-xl flex flex-col justify-center gap-4'>
                        <div>
                            <FontAwesomeIcon icon={faPhone} size="1x" className="w-4 h-4 md:w-6 md:h-6 mr-2 text-stromRed" />
                            <a href={`tel:${block.phone.link}`}>
                                { block.phone.name }
                            </a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faAt} size="1x" className="w-4 h-4 md:w-6 md:h-6 mr-2 text-stromRed" />
                            <a href={`mailto:${block.email.link}`}>
                                { block.email.name }
                            </a>
                        </div>
                    </div>
                    <a href={ block.map.link } target='_blank' className='flex items-center bg-black text-white p-10 rounded-xl'>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} size="1x" className="w-4 h-4 md:w-6 md:h-6 pr-4 text-stromRed" />
                        </div>
                        <div>
                            <ReactMarkdown children={block.map.name} rehypePlugins={[rehypeRaw]} />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;