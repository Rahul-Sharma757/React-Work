import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function PartnerPortal() {
    return (
        <>
            <Header />
            <section className="project-detail-banner position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 logo-clr fw-bold">Partner Portal</h2>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <p className="lead text-center">Kyra Technologies provides B2B solutions for websites to grow their business.
                        We provide an online environment which gives you a wide engagement in commerce.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default PartnerPortal
