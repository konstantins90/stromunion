import React from 'react';
import Teaser from './content/teaser.js';
import MetroHome from './content/metroHome.js';
import Map from './content/map.js';
import TextScroll from './content/textScroll.js';
import Partner from './content/partner.js';

const componentMap = {
    "STRAPI__COMPONENT_CONTENT_TEASER": Teaser,
    "STRAPI__COMPONENT_CONTENT_METRO_HOME": MetroHome,
    "STRAPI__COMPONENT_CONTENT_KARTE": Map,
    "STRAPI__COMPONENT_CONTENT_TEXT_SCROLL": TextScroll,
    "STRAPI__COMPONENT_CONTENT_PARTNERS": Partner,
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
