import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
    `)
    
    const meta = data.site.siteMetadata;

    return (
        <footer id="footer" className="py-5 relative min-h-80 flex flex-col justify-end text-white">
            <StaticImage
                src="../images/footer-bg.png"
                height={1920}
                className="overlay absolut left-0 right-0 bottom-0 h-80 -z-10"
            />
            <div className="flex flex-col">
                <div className="text-sm text-center mb-2">
                    { meta.title } · <Link to="/impressum">Impressum</Link>
                </div>
                <div className="footer-copyright text-sm text-center">
                    Designed und programmiert mit <span class="text-red-600">♥</span> bei <a target="_blank" href="https://www.smetana.be">Smetana</a>.
                </div>
            </div>
        </footer>
    )
}

export default Footer
