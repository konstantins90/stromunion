import React, { useEffect, useState } from "react"
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

const renderMdx = (mdx) => {
    // Compile the MDX content
    const code = compileMDX(mdx);

    // Run the compiled code to get the React component
    const { default: Content } = runSync(code, runtime);

    // Return the rendered content
    return <Content />;
};

const Text2Columns = ({ id, headline, textLeft, textRight }) => {
    const [content, setContent] = useState();

    return (
        <section id={id}>
            <div className="wrap pt-32 pb-20">
                <div className="container mx-auto" data-aos="fade-up">
                    <div className="headline mb-10">
                        <h3 className="text-5xl">{headline}</h3>
                    </div>
                    <div className="content flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 font-light">
                        <div className="md:w-1/2">
                            {renderMdx(textLeft)}
                        </div>
                        <div className="md:w-1/2">
                            {renderMdx(textRight)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Text2Columns
