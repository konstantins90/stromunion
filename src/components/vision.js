import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faLeaf,
    faLightbulb,
    faHandshake
} from "@fortawesome/free-solid-svg-icons"

const Vision = () => {
    return (
        <div id="visions" className="flex flex-col md:flex-row mt-16 gap-10">
            <div className="vision flex-1 px-8 py-10 bg-zinc-900 rounded-xl" data-aos="fade-up">
                <div className="flex flex-col text-left">
                    <div className="step-title text-lg pb-4">
                        <FontAwesomeIcon icon={faLeaf} size="2x" className="w-6 h-6 mr-2 text-stromRed relative" /> Nachhaltigkeit als Motor des Fortschritts
                    </div>
                    <div className="step-description font-light">
                        Unser Engagement für erneuerbare Energien und ressourcenschonende Prozesse ebnet den Weg für nachhaltigen wirtschaftlichen Erfolg und eine grüne Zukunft.
                    </div>
                </div>
            </div>
            <div className="vision flex-1 px-8 py-10 bg-zinc-900 rounded-xl" data-aos="fade-up">
                <div className="flex flex-col text-left">
                    <div className="step-title text-lg pb-4">
                        <FontAwesomeIcon icon={faLightbulb} size="2x" className="w-6 h-6 mr-2 text-stromRed relative" /> Innovation und modernste Technologie
                    </div>
                    <div className="step-description font-light">
                        Mit modernster Technologie und kreativen Lösungen revolutionieren wir den Energiemarkt und gestalten zukunftssichere Energiekonzepte.
                    </div>
                </div>
            </div>
            <div className="vision flex-1 px-8 py-10 bg-zinc-900 rounded-xl" data-aos="fade-up">
                <div className="flex flex-col text-left">
                    <div className="step-title text-lg pb-4">
                        <FontAwesomeIcon icon={faHandshake} size="2x" className="w-6 h-6 mr-2 text-stromRed relative" /> Partnerschaft und Vertrauen in der Zusammenarbeit
                    </div>
                    <div className="step-description font-light">
                        Vertrauen und enge Kooperation bilden die Basis für starke Partnerschaften, die gemeinsam den Weg in eine nachhaltige Zukunft ebnen.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision