import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import { configQuery } from "../queries/configFragment.js";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            strapiConfig {
                ...ConfigData
            }
        }
    `);

    return (
        <footer id="footer" className="py-5 px-4 relative flex flex-col justify-end bg-black text-white">
            <div className="flex flex-col">
                <div className="text-sm text-center mb-2">
                    {data.strapiConfig.footer_text_1.data.footer_text_1} · <Link to="/impressum">Impressum</Link>
                </div>
                { data.strapiConfig.footer_text_2 && (
                    <div className="footer-copyright text-sm text-center">
                        <ReactMarkdown children={data.strapiConfig.footer_text_2.data.footer_text_2} rehypePlugins={[rehypeRaw]} />
                    </div>
                )}
            </div>
        </footer>
    )
}

export default Footer
