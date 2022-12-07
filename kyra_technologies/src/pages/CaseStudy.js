import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NCRRProjectImg from '../img/Screenshot 2021-09-17 at 4.26.58 PM.png';
import CRCProjectImg from '../img/Screenshot 2021-09-17 at 4.27.32 PM.png';

function CaseStudy() {
    return (
        <>
            <Header />
            <section className=" project-detail-banner position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 logo-clr fw-bold">Case Study</h2>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <h2 className="display-6 fw-bold logo-clr text-center">Kyra Technology Client Solution</h2>
                    <p className="lead text-center mb-1">Lets's take tour for our work. </p>
                    <p className="text-center">Our success in our Client success, we are proud to say that over half decade
                        we assisted by building IT System for our client to propel their Business forward.</p>
                    <h6 className="fw-bold lead text-center">Here it is:</h6>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm rounded">
                                <img src={NCRRProjectImg} className="img-fluid" alt="MPS" />
                                    <div className="card-body text-center pb-5">
                                        <h3>MPS</h3>
                                        <p>very enterprise survives on goods and they need to be produced.
                                            Once a product is manufactured that has to be sent to the consumer. It seems very...
                                        </p>
                                        <a href="mps.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div className="card border-0 shadow-sm rounded">
                                <img src={CRCProjectImg} className="img-fluid" alt="MPS" />
                                    <div className="card-body text-center pb-5">
                                        <h3>CRC</h3>
                                        <p>Any enterprise who is producing or manufacturing needs, A partner.
                                            “A partner” can be any external organization that plays an integral role...
                                        </p>
                                        <a href="project-description-cs.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-xl-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div className="card border-0 shadow-sm rounded">
                                <img src={NCRRProjectImg} className="img-fluid" alt="MPS" /> 
                                    <div className="card-body text-center pb-5">
                                        <h3>NCRR</h3>
                                        <p>North California Railroad Company / A private corporation manages the 317 mile rail corridor.
                                            NCRR requires a utility occupancy portal where customers...
                                        </p>
                                        <a href="project-description-nrc.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm rounded">
                                <img src={NCRRProjectImg} className="img-fluid" alt="MPS" />
                                    <div className="card-body text-center pb-5">
                                        <h3>Small HD</h3>
                                        <p>very enterprise survives on goods and they need to be produced.
                                            Once a product is manufactured that has to be sent to the consumer. It seems very...
                                        </p>
                                        <a href="smallHD.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div className="card border-0 shadow-sm rounded">
                                <img src={CRCProjectImg} className="img-fluid" alt="MPS" />
                                    <div className="card-body text-center pb-5">
                                        <h3>Teredek</h3>
                                        <p>Any enterprise who is producing or manufacturing needs, A partner.
                                            “A partner” can be any external organization that plays an integral role...
                                        </p>
                                        <a href="teredek.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-xl-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div className="card border-0 shadow-sm rounded">
                                <img src={NCRRProjectImg} className="img-fluid" alt="MPS" />
                                    <div className="card-body text-center pb-5">
                                        <h3>Reseller</h3>
                                        <p>North California Railroad Company / A private corporation manages the 317 mile rail corridor.
                                            NCRR requires a utility occupancy portal where customers...
                                        </p>
                                        <a href="reseller.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm rounded">
                                <img src={NCRRProjectImg} className="img-fluid" alt="MPS" />
                                    <div className="card-body text-center pb-5">
                                        <h3>Printing</h3>
                                        <p>Once a product is ready it will go to market or on e-commerce so each
                                            and every product should be labeled. A labeled product plays a vital role in its...
                                        </p>
                                        <a href="printing.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div className="card border-0 shadow-sm rounded">
                                <img src={CRCProjectImg} className="img-fluid" alt="MPS" />
                                    <div className="card-body text-center pb-5">
                                        <h3>Licensing</h3>
                                        <p>Licensing is a software item which prevents replicated software. It needs to be activated.
                                            A license validation is required for the software which...
                                        </p>
                                        <a href="Licensing.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5 mt-lg-0">
                            <div className="card border-0 shadow-sm rounded">
                                <img src={NCRRProjectImg} className="img-fluid" alt="MPS" />
                                    <div className="card-body text-center pb-5">
                                        <h3>Download Portal</h3>
                                        <p>To make the user experience better software updates are available.
                                            How to access those updates? &nbsp; Where can these updates be found?...
                                        </p>
                                        <a href="downloadportal.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <div className="card border-0 shadow-sm rounded">
                                    <img src={NCRRProjectImg} className="img-fluid" alt="MPS" />
                                        <div className="card-body text-center pb-5">
                                            <h3>Activation App</h3>
                                            <p>A product is manufactured and to validate that production,
                                                A product needs warranty. Warranty is a legal boundation within consumer and...
                                            </p>
                                            <a href="acitvationApp.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                                <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-5 mt-lg-0">
                                <div className="card border-0 shadow-sm rounded">
                                    <img src={NCRRProjectImg} className="img-fluid" alt="MPS" />
                                        <div className="card-body text-center pb-5">
                                            <h3>Partner Portal</h3>
                                            <p>A product is manufactured and to validate that production,
                                                A product needs warranty. Warranty is a legal boundation within consumer and...
                                            </p>
                                            <a href="partner-portal.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                                <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CaseStudy
