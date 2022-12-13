import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectActivationAppImg from '../img/Screenshot 2021-09-17 at 4.26.58 PM.png'

function ActivationApp() {
    return (
        <>
            <Header />
            <section className="project-detail-banner position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 logo-clr fw-bold">Activation App</h2>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <img src={ProjectActivationAppImg} className="img-fluid mt-3 mt-md-5" alt='img' />
                        <h2 className="fw-bold mb-3 mt-4">Challenges for Client</h2>
                        <p>
                            A product is manufactured and to validate that production, A product needs warranty. Warranty is a legal boundation within consumer
                            and manufacturer. Warranty sets an expectation that a particular product is free from defects. So keeping in mind that all the products
                            purchased long ago from the manufacturer are under warranty, how to know whether that product is under warranty or not.
                        </p>
                        <h2 className="fw-bold mb-3 pt-6">Solution Overview</h2>
                        <p>
                            Activation app is used to catch if the product is under warranty or not. If it is under warranty the process will go beyond
                            and ask for the registration. Once registration is done if a repair or replacement whatsoever can be done with the product.
                        </p>
                        <p>
                            If it is not warranty then it will direct you to the login page and will not move further.
                        </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ActivationApp
