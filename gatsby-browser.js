import React, { useEffect } from "react";

import "./src/styles/global.css"
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const BodyClassWrapper = ({ children, location }) => {
    useEffect(() => {
        let pageClass = location.pathname;
        pageClass = pageClass.replace(/\/$/, "");
        pageClass = pageClass.replace(/\//g, "-") || "-home";
        document.body.className = `page${pageClass}`;

        return () => {
            document.body.className = ""; // Cleanup beim Seitenwechsel
        };
    }, [location.pathname]);

    return <>{children}</>;
};

export const wrapPageElement = ({ element, props }) => {
    return <BodyClassWrapper location={props.location}>{element}</BodyClassWrapper>;
};