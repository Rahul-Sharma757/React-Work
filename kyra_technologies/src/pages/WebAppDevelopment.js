import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import webDevelopmentImg from '../img/Web-Application-Development-GuglY-Tech-1068x564.jpg'
import toolsImg from '../img/tools.jpg'

function WebAppDevelopment() {
    return (
        <>
            <Header />
            <section className=" bg-career position-relative pt-350">
                <div className="about-absolute">
                    <div className="container text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">Custom Apps</h2>
                        <h3 className="mt-3">Web App Development</h3>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <img src={webDevelopmentImg} className="img-fluid w-100" alt="web-app-development" />
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <p className="lead text-center">Web application development is required to get access to anything via the network.
                        No matter if that is something you are producing, selling, marketing or easing on to any technique.
                        Kyra Technologies can deliver them all as per the requirement.
                        We understand the requirements as per client based and program them for your users.
                        Web based applications have a large amount of information and it changes from time to time.
                        so our developers are expert from head to toe, frontend development to backend coding, user
                        experience management to data management, cloud-based apps to on-system software, we have expertise
                        in all the aspects of web application development.
                    </p>
                </div>
                <div className="container pt-6">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="mb-3 fw-bold">Tools we use</h4>
                            <ul className="d-none d-md-block">
                                <li className="mb-2">Our web applications are written on HTML5, Cascading style sheets and in Javascript can be assessed by using your preferred web browser.</li>
                                <li className="mb-2">Bootstrap: an automation framework which manages HTML.</li>
                                <li className="mb-2">CSS.JavaScript libraries and its frameworks respectively.</li>
                                <li className="mb-2">Js: JavaScript runtime used for back-end programming.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src={toolsImg} className="img-fluid" alt="tools" />
                        </div>
                        <ul className="d-block d-md-none mt-3">
                            <li className="mb-2">Our web applications are written on HTML5, Cascading style sheets and in Javascript can be assessed by using your preferred web browser.</li>
                            <li className="mb-2">Bootstrap: an automation framework which manages HTML.</li>
                            <li className="mb-2">CSS.JavaScript libraries and its frameworks respectively.</li>
                            <li className="mb-2">Js: JavaScript runtime used for back-end programming.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <h4 className="mb-3 fw-bold">Benefits of Web App</h4>
                    <p>It is flexible and has a high level of security. It saves your data on the cloud if your system breaks
                        down or new software/device is installed. With the web based application your business is as usual.
                    </p>
                    <p>Business systems created on web applications are accessible anytime and customised throughout the world and totally flexible.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default WebAppDevelopment
