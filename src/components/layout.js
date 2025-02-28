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
            <div className="bg-zinc-100 text-red-600"></div>
            <Footer/>
        </>
    )
}

export default Layout
