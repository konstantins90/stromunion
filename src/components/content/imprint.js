import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import { configQuery } from "../../queries/configFragment.js";

const Imprint = () => {
    const data = useStaticQuery(graphql`
        query {
            strapiConfig {
                ...ConfigData
            }
        }
    `);

    return (
        <section className="p-4" data-aos="fade-up">
            <div className="wrap px-5 xl:px-20 py-5 md:py-10 xl:w-1/2">
                <div class="text-lg font-light md:columns-2">
                    {data.strapiConfig.impressum.map(function(item) {
                        return (
                            <dl class="contact contact_fields">
                                <dt>
                                    <strong>
                                        {item.label}
                                    </strong>
                                </dt>
                                <dd>
                                    {item.value}
                                </dd>
                            </dl>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Imprint