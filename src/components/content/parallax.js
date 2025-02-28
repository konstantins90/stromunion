import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Parallax = ({ block }) => {
    return (
        <section className="parallax">
            <div className="bg">
                <div
                    className="bg parallax h-[70vh] md:h-screen relative"
                    style={{ backgroundImage: `url(${block.background.localFile.publicURL})` }}
                >
                    <div class="w-full h-full absolute inset-0 img-overlay"></div>
                    <div className="container text-center h-full flex flex-col justify-center relative">
                        <ReactMarkdown children={block.text.data.text} rehypePlugins={[rehypeRaw]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parallax;