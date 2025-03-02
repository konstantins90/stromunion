import React from "react"
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <div className="md:text-xl"></div>
            <Footer/>
        </>
    )
}

export default Layout
