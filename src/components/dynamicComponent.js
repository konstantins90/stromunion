import React from 'react';
import Teaser from './content/teaser.js';
import MetroHome from './content/metroHome.js';
import Metro from './content/metro.js';
import Map from './content/map.js';
import TextScroll from './content/textScroll.js';
import Partner from './content/partner.js';
import Service from './content/service.js';
import Button from './content/button.js';
import Project from './content/project.js';
import Box from './content/box.js';
import Contact from './content/contact.js';
import Parallax from './content/parallax.js';
import Step from './content/step.js';
import Imprint from './content/imprint.js';

const componentMap = {
    "STRAPI__COMPONENT_CONTENT_TEASER": Teaser,
    "STRAPI__COMPONENT_CONTENT_METRO_HOME": MetroHome,
    "STRAPI__COMPONENT_CONTENT_METRO_UEBER_UNS": Metro,
    "STRAPI__COMPONENT_CONTENT_KARTE": Map,
    "STRAPI__COMPONENT_CONTENT_TEXT_SCROLL": TextScroll,
    "STRAPI__COMPONENT_CONTENT_PARTNERS": Partner,
    "STRAPI__COMPONENT_CONTENT_LESITUNGEN": Service,
    "STRAPI__COMPONENT_CONTENT_PROJEKTE": Project,
    "STRAPI__COMPONENT_CONTENT_RED_BUTTON_LINK": Button,
    "STRAPI__COMPONENT_CONTENT_BOXEN": Box,
    "STRAPI__COMPONENT_CONTENT_KONTAKT": Contact,
    "STRAPI__COMPONENT_CONTENT_PARALLAX": Parallax,
    "STRAPI__COMPONENT_CONTENT_SCHRITTE": Step,
    "STRAPI__COMPONENT_CONTENT_IMPRESSUM": Imprint,
};

const DynamicComponent = ({ block, template }) => {
    const Component = componentMap[block.__typename];
    if (!Component) {
        console.warn(`Unbekannter Komponententyp: ${block.__typename}`);
        return null;
    }
    return <Component block={block} template={template} />;
};

export default DynamicComponent;
