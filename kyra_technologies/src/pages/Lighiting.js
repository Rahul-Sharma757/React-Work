import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Lighiting() {
    return (
        <>
            <Header />
            <section className="pb-8 bg-career position-relative pt-350">
                <div className="about-absolute">
                    <div className="text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">Salesforce</h2>
                        <h3 className="mt-3">Lighting</h3>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <h2 className="logo-clr text-center">Comming Soon...</h2>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Lighiting