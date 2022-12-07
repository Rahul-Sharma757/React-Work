import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

function WeAreHiring() {
    return (
        <>
            <Header />
            <section className="pb-8 bg-career position-relative pt-350">
                <div className="about-absolute">
                    <div className="position-relative align-center">
                        <h2 className="text-center display-4 fw-bold logo-clr">We are Hiring</h2>
                        <h3 className="text-center mt-3">Be a part of Kyra Technologies</h3>
                        <div className="d-md-flex justify-content-center mt-3">
                            <div className="lead text-center">
                                <p>Aspire your Future goal,</p>
                            </div>
                            <div className="lead text-center">
                                <p>&nbsp; Follow your Passion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="d-lg-flex align-items-start">
                                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a href=" " className="nav-link active fs-3" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Chandigarh</a>
                                    <a href=" " className="nav-link fs-3 disabled" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" disable>Bengaluru</a>
                                </div>
                                <div className="tab-content w-100" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <a href="softwareDeveloper-Node-js.html" className="text-decoration-none">
                                            <div className="d-sm-flex fs-5 hirings-bg p-3 text-light">
                                                <span className="w-10 text-start"><i className="fab fa-node-js"></i></span>
                                                <span className="">Node Js Developer</span>
                                                <div className="ms-auto">(Exp. 1-3year)</div>
                                            </div>
                                        </a>
                                        <a href="salesforce.html" className="text-decoration-none">
                                            <div className="d-sm-flex fs-5 hirings-bg p-3 text-light mt-3">
                                                <span className="w-10 text-start"><i className="fab fa-salesforce"></i></span>
                                                <span className="">Salesforce Developer</span>
                                                <div className="ms-auto">(Exp. 1-2year)</div>
                                            </div>
                                        </a>
                                        <a href="react-js.html" className="text-decoration-none">
                                            <div className="d-sm-flex fs-5 hirings-bg p-3 text-light mt-3">
                                                <span className="w-10 text-start"><i className="fab fa-react"></i></span>
                                                <span className="">React Js Developer</span>
                                                <div className="ms-auto">(Exp. 1-3year)</div>
                                            </div>
                                        </a>
                                        <a href="mern-stack.html" className="text-decoration-none">
                                            <div className="d-sm-flex fs-5 hirings-bg p-3 text-light mt-3">
                                                <span className="w-10 text-start"><i className="fab fa-js"></i></span>
                                                <span className="">MERN Stack Developer</span>
                                                <div className="ms-auto">(Exp. 1-2year)</div>
                                            </div>
                                        </a>
                                        <a href="software-developer.html" className="text-decoration-none">
                                            <div className="d-sm-flex fs-5 hirings-bg p-3 text-light mt-3">
                                                <span className="w-10 text-start"><i className="fal fa-browser"></i></span>
                                                <span className="">Software Developer</span>
                                                <div className="ms-auto">(Exp. 1-2year)</div>
                                            </div>
                                        </a>
                                        {/* <!--<div className="col-lg-6">
                                            <ul type="none" className="px-0">
                                                <li className="border-bottom"><a href="react-js.html" className="nav-link text-dark fs-5">

                                                </a></li>
                                                <li className="border-bottom"><a href="mern-stack.html" className="nav-link text-dark fs-5">

                                                </a></li>
                                            </ul>
                                        </div>--> */}
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                        <h2 className="fs-5 fw-bold logo-clr text-center">Coming Soon...</h2>
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

export default WeAreHiring
