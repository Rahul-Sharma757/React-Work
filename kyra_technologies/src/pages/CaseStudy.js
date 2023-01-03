import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyData from "../components/CaseStudyData"

function CaseStudy() {
    return (
        <>
            <section className="project-detail-banner position-relative pt-350">
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
                        {CaseStudyData.map((value, key) => (

                            <div className="col-lg-4 mt-5">
                                <div className="card border-0 shadow-sm rounded">
                                    <img src={value.image} className="img-fluid" alt="MPS" />
                                    <div className="card-body text-center pb-5">
                                        <h3>{value.heading}</h3>
                                        <p>{value.para}
                                        </p>
                                        <Link to={value.link} className="btn position-relative px-4 btn-hover logo-clr shadow-none mt-4 mt-lg-0">Read More
                                            <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CaseStudy
