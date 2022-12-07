import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaintainanceSupportImg from '../img/maintenance&support.png'
function MaintainanceSupport() {
    return (
        <>
            <Header />
            <section className="pb-8 bg-career position-relative pt-350">
                <div className="about-absolute">
                    <div className="text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">Salesforce</h2>
                        <h3 className="mt-3">Maintenance and Support</h3>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <img src={MaintainanceSupportImg} className="img-fluid object-fit-cover" alt="Maintenance and Support" />
                        </div>
                        <div className="col-lg-8 mt-4 mt-lg-0">
                            <p className="lead">
                                Our Salesforce developers understand the needs of our clients' optimum growth and their requirements.
                                Salesforce needs to be implemented by skills, additional improvements and technical support.
                                To maximise the potential we fix bugs,review code and also work on performance issues.
                            </p>
                            <h6 className="fw-bold lead">What do we provide?</h6>
                            <ul>
                                <li className="lead">Support Services</li>
                                <li className="lead">Continuous Management</li>
                                <li className="lead">Customisation</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MaintainanceSupport
