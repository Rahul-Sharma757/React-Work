import React from 'react'
import project_img from '../img/Screenshot 2021-09-17 at 4.26.58 PM.png'
import ncrrLogo from '../img/ncrr-logo.png'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <>
            <section className="py-8">
                <div className="container text-center">
                    <h2 className="display-5 fw-bold logo-clr">Projects</h2>
                    <h4 className="mt-5 text-start">We Deliver Digital Experiences Your
                        Customers Love, By Design.
                    </h4>
                    <div className="position-relative mt-3">
                        <img src={project_img} className="img-fluid w-100 min-h" alt="project2" />
                        <div className="position-abso whitebg-opacity p-lg-5  text-start mt-3">
                            <img src={ncrrLogo} className="img-fluid w-25" alt="Project Logo" />
                            <p className="mt-2">North California Railroad Company / A private corporation manages the 317 mile rail corridor NCRR requires
                                a utility occupancy portal where customers can submit their details by signing up themselves They could submit their details as per their type of installation
                                required and verify their purpose of installation. If they.....
                            </p>
                            <Link to="project-description-nrc.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none d-none d-lg-inline-block">Read More
                                <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                            </Link>
                            <div className="d-sm-flex mt-3 mt-lg-5 align-items-center">
                                <div className="">
                                    <p className="lead mb-0">North California Railroad Company</p>
                                    <p>A private corporation manages the 317 mile rail corridor.
                                    </p>
                                </div>
                            </div>
                            <Link to="project-description-nrc.html" className="btn position-relative px-4 btn-hover logo-clr shadow-none d-inline-block d-lg-none mt-4">Read More
                                <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
