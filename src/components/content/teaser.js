import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Teaser = ({ block, template }) => {
    const { headline, subline, text } = block;
    if (template == 'home') {
        return (
            <section className="p-4" data-aos="fade-up">
                <div className="px-5 xl:px-20 py-5 md:py-10 flex flex-col xl:flex-row wrap justify-between xl:gap-16">
                    <div className="flex basis-full xl:basis-2/5 items-center gap-10 text-left">
                        <div>
                            <h1 className="text-3xl mb-4 line">
                                {headline}
                            </h1>
                            <div className="text-md font-light md:font-normal md:text-2xl">
                                <ReactMarkdown children={subline.data.subline} rehypePlugins={[rehypeRaw]} />
                            </div>
                        </div>
                    </div>
                    <div className="basis-full xl:basis-3/5">
                        <div className='text-lg font-light mt-4'>
                            <ReactMarkdown children={text.data.text} rehypePlugins={[rehypeRaw]} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="teaser p-4" data-aos="fade-up">
            <div className="wrap px-5 xl:px-20 py-5 md:py-10 flex justify-between">
                <div className="flex items-center gap-10 text-left">
                    <div>
                        <h1 className="text-3xl md:text-6xl xl:text-8xl mb-4 line">
                            {headline}
                        </h1>
                        {subline && (
                            <div className="text-2xl md:text-3xl xl:text-5xl font-light">
                                <ReactMarkdown children={subline.data.subline} rehypePlugins={[rehypeRaw]} />
                            </div>
                        )}

                        {text && (
                            <div className='text-xl md:text-3xl font-light mt-10 xl:max-w-[70%]'>
                                <ReactMarkdown children={text.data.text} rehypePlugins={[rehypeRaw]} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teaser;