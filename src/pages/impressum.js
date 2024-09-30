import * as React from "react"
import Layout from "../components/layout.js"
import { useStaticQuery, graphql, Link } from "gatsby"

const Impressum = () => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              name
              address
              city
              email
              fon
            }
          }
        }
    `)
    
    const meta = data.site.siteMetadata;

    return (
        <Layout>
           <div className="bg-white h-full py-10">
                <div className="container mx-auto">
                    <div className="text-3xl">Impressum</div>
                    <div className="mt-5">
                        {meta.name}<br/>
                        {meta.address}<br/>
                        {meta.city}<br/><br/>

                        Kontakt<br/>
                        Telefon: {meta.fon}<br/>
                        E-Mail: {meta.fon}<br/><br/>

                        Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

                        Quelle: https://www.e-recht24.de/impressum-generator.html
                    </div>
                </div>
           </div>
        </Layout>
    )
}

export default Impressum

export const Head = () => <title>Home Page</title>
