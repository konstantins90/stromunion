import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const dataQuery = graphql`
    query Steps {
        allStepsJson {
            nodes {
                number
                title
                description
            }
        }
    }
`

const Step = ({ block }) => {
    const sourceData = useStaticQuery(dataQuery)
    const steps = sourceData.allStepsJson.nodes

    return (
        <section id="step-by-step" className="py-10 bg-black">
            <div className="container py-20 text-zinc-200" data-aos="fade-up">
                <h3 className='text-4xl xl:text-6xl font-light line'>
                    { block.headline }
                </h3>
                <p className='mt-8 text-xl font-light'>
                    <ReactMarkdown children={block.text.data.text} rehypePlugins={[rehypeRaw]} />
                </p>
                <div id="steps" className="flex flex-wrap mt-16 flex-row -mx-8">
                    {steps.map(function(step) {
                        return (
                            <div className={ "step w-full lg:w-1/2 px-8 py-10 " + step.class + " step-" + step.number }>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="flex-none step-number text-9xl font-light text-gray-400">
                                        { step.number }
                                    </div>
                                    <div>
                                        <div className="step-title text-4xl font-light pb-2">
                                            { step.title }
                                        </div>
                                        <div className="step-description text-xl font-light">{ step.description }</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Step