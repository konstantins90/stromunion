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

const Text = ({ id, text }) => {
    const [content, setContent] = useState();

    useEffect(() => {
        const code = compileMDX(text);

        const { default: Content } = runSync(code, runtime);
        setContent(Content());
    }, []);

    return (
        <section id={id}>
            <div className="wrap pt-10 pb-20 bg-gold">
                <div className="container mx-auto">
                    <div className="max-w-[700px] mx-auto font-light" data-aos="fade-up">
                        {content && content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Text
