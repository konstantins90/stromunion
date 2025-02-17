import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import Logo from "../assets/logo.svg"
import AOS from "aos"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleArrowRight,
    faPhone,
    faAt,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          allMdx (
            filter: {
              frontmatter: {
                slug: { ne: null }
                isPublished: { eq: true }
              } 
            }
            sort: { frontmatter: { sort: ASC } }
          ) {
            nodes {
              frontmatter {
                title
                slug
                class
              }
            }
          }
        }
    `)

    const links = data.allMdx.nodes
    const [activeSection, setActiveSection] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
      AOS.init();

      const handleScroll = () => {
        const sections = links.map(link => document.getElementById(link.frontmatter.slug));
        const scrollPosition = window.scrollY + 100; // Offset for sticky header

        sections.forEach(section => {
          if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            setActiveSection(section.id);
          }
        });

        // Add or remove 'scroll' class based on scroll position
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

    const handleClick = (e, slug) => {
      e.preventDefault();
      const targetElement = document.getElementById(slug);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust for sticky header height
          behavior: "smooth",
        });
        setActiveSection(slug);
        setIsMenuOpen(false); // Close menu on link click
      }
    };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    return (
        <header id="header" className={`absolute top-0 left-0 right-0 z-50 font-light ${hasScrolled ? 'scroll' : ''}`}>
            <div className="mx-auto flex justify-center md:justify-between items-center px-14 py-14 xl:py-20 xl:px-24">
                {/* <h2 className="text-2xl">{title}</h2> */}
                <h2 className="text-2xl">
                    <Link to="/" className="hidden"><Logo className="logo w-[80px] h-auto" /></Link>
                </h2>
                {/* Burger Icon */}
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
                {/* Navigation */}
                <nav id="nav-main" className={`${isMenuOpen ? "block show z-20" : "hidden"} md:block md:bg-black md:bg-opacity-65 md:rounded-full max-md:fixed max-md:inset-0`}>
                    <ul className="flex flex-col md:flex-row gap-5 mb-0 max-md:flex max-md:h-full max-md:justify-end max-md:p-5">
                        {links.map(link => (
                            <li key={link.frontmatter.slug}>
                                <Link
                                  to={`${link.frontmatter.slug}`}
                                  className={`block px-4 py-4 max-md:bg-zinc-900 max-md:opacity-90 max-md:rounded-xl max-md:py-6 max-md:text-xl text-white ${link.frontmatter.class} $activeSection === $link.frontmatter.slug ? 'active' : ''`}
                                >
                                  {link.frontmatter.title}
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
            </div>
            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-10"
                    onClick={closeMenu}
                ></div>
            )}
        </header>
    )
}

export default Header
