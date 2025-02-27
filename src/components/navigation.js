import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPhone,
    faAt,
} from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {
    const data = useStaticQuery(graphql`
        query GetPages {
            allStrapiPage(sort: {order: ASC}) {
                nodes {
                    id
                    name
                    slug
                    template
                    class
                }
            }
        }
    `)

    const links = data.allStrapiPage.nodes.map(node => 
        node.slug === "home" || node.slug == null ? { ...node, slug: "" } : node
    );
    const [activeSection, setActiveSection] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        const sections = links.map(link => document.getElementById(link.slug));
        const scrollPosition = window.scrollY + 100; // Offset for sticky header

        sections.forEach(section => {
            if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                setActiveSection(section.id);
            }
        });

        if (window.scrollY > 100) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [links]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div id="burger-menu" className={`${isMenuOpen ? "show" : ""} md:hidden z-40`} onClick={toggleMenu}>
                <button className="text-white focus:outline-none">
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" id="Layer_1" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="m12 14.6h-9c-.9 0-1.6-.7-1.6-1.6v-6c0-.9.7-1.6 1.6-1.6h9c.9 0 1.6.7 1.6 1.6v6c0 .9-.7 1.6-1.6 1.6zm-9-8c-.2 0-.4.2-.4.4v6c0 .2.2.4.4.4h9c.2 0 .4-.2.4-.4v-6c0-.2-.2-.4-.4-.4z" fill="rgb(0,0,0)"/></g><g><path d="m21 14.6h-4c-.9 0-1.6-.7-1.6-1.6v-10c0-.9.7-1.6 1.6-1.6h4c.9 0 1.6.7 1.6 1.6v10c0 .9-.7 1.6-1.6 1.6zm-4-12c-.2 0-.4.2-.4.4v10c0 .2.2.4.4.4h4c.2 0 .4-.2.4-.4v-10c0-.2-.2-.4-.4-.4z" fill="rgb(0,0,0)"/></g><g><path d="m20 22.6h-11c-.9 0-1.6-.7-1.6-1.6v-3c0-.9.7-1.6 1.6-1.6h11c.9 0 1.6.7 1.6 1.6v3c0 .9-.7 1.6-1.6 1.6zm-11-5c-.2 0-.4.2-.4.4v3c0 .2.2.4.4.4h11c.2 0 .4-.2.4-.4v-3c0-.2-.2-.4-.4-.4z" fill="rgb(0,0,0)"/></g></svg>
                    )}
                </button>
            </div>
            <nav id="nav-main" className={`${isMenuOpen ? "block show z-20" : "hidden"} md:block md:bg-black md:bg-opacity-65 md:rounded-full max-md:fixed max-md:inset-0 max-md:overflow-y-scroll`}>
                <ul className="flex flex-col md:flex-row gap-5 mb-0 max-md:flex max-md:h-auto max-md:justify-end max-md:p-5">
                    {links.map(link => (
                        <li key={link.slug}>
                            <Link
                                to={`/${link.slug}`}
                                className={`block px-4 py-4 max-md:bg-zinc-900 max-md:opacity-90 max-md:rounded-xl max-md:py-6 max-md:text-xl text-white ${link.class} $activeSection === $link.slug ? 'active' : ''`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="flex gap-5 md:hidden">
                        <a href="tel:+491728333397" className="flex-1 px-4 py-4 max-md:bg-zinc-900 max-md:opacity-90 max-md:rounded-xl max-md:py-6 max-md:text-xl text-white text-center">
                        <FontAwesomeIcon icon={faPhone} size="1x" className="w-6 h-6 pr-4 text-stromRed" />
                        </a>
                        <a href="mailto:info@stromunion.com" className="flex-1 px-4 py-4 max-md:bg-zinc-900 max-md:opacity-90 max-md:rounded-xl max-md:py-6 max-md:text-xl text-white text-center">
                        <FontAwesomeIcon icon={faAt} size="1x" className="w-6 h-6 pr-4 text-stromRed" />
                        </a>
                    </li>
                </ul>
            </nav>
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-10"
                    onClick={closeMenu}
                ></div>
            )}
        </>
    )
}

export default Navigation