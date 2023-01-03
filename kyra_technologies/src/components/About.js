import React from 'react';
import AboutImg from '../img/team.jpg';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section id="about" className="position-relative">
            <div className="container">
                <div className="row gx-0 h-600">
                    <div className="col-lg-6 px-0 py-5 pe-3 text-aligner-lg">
                        <h2 className="display-5 fw-bold logo-clr ">About</h2>
                        <p className="d-none d-lg-block">Kyra Technologies does magic because our developers know
                            how to solve a problem and can improve a pre-existing problem to a
                            solution. We follow principles, patterns and practice to reassess your professional goals.
                        </p>
                        <p className="d-none d-lg-block">
                            From 2016 Kyra Technologies is achieving a
                            successful journey of developing software.
                            We offer customisations, including web, database,
                            thick-client, console, Software automations, ERP/CRP and embedded apps.
                        </p>
                        <p className="d-none d-lg-block">
                            We are a team of technical expertise and innovative ideas who believe in delivering projects on time and guarantee transparency,
                            satisfaction with utmost quality. Leveraging the power of technical skills we deliver end to end solutions for million dollar
                            funded small and medium enterprises.
                        </p>
                        <Link to="/aboutPage" className="btn position-relative px-4 py-2 btn-hover logo-clr shadow-none d-none d-lg-inline-block">Read more
                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                        </Link>
                    </div>
                    <div className="col-lg-6 px-0 overflow-auto pos-abso">
                        <img src={AboutImg} className="img-fluid h-600 w-100 obj-fit-cover" alt=" team" />
                        <p className="d-block d-lg-none mt-4">
                            Kyra Technologies does magic because our developers know
                            how to solve a problem and can improve a pre-existing problem to a
                            solution. We follow principles, patterns and practice to reassess your professional goals.
                        </p>
                        <p className="d-block d-lg-none">
                            From 2016 Kyra Technologies is achieving a
                            successful journey of developing software.
                            We offer customisations, including web, database,
                            thick-client, console, Software automations, ERP/CRP and embedded apps.
                        </p>
                        <Link to="about.html" className="btn position-relative px-4 py-2 btn-hover logo-clr shadow-none d-inline-block d-lg-none mb-5">Read more
                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
