import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Teradek() {
    return (
        <>
            <Header />
            <section className="project-detail-banner position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 logo-clr fw-bold">Teredek</h2>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <h2 className="display-4 logo-clr text-center">Comming Soon...</h2>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Teradek
