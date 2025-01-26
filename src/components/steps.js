import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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

const Steps = () => {
    const sourceData = useStaticQuery(dataQuery)
    const steps = sourceData.allStepsJson.nodes

    return (
        <div id="steps" className="flex flex-wrap mt-16 flex-row -mx-8">
            {steps.map(function(step, index) {
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
    )
}

export default Steps