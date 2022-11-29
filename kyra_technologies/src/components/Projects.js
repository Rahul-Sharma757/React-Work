import React from 'react'
import project_img from '../img/Screenshot 2021-09-17 at 4.26.58 PM.png'
import ncrrLogo from '../img/ncrr-logo.png'

function Projects() {
    return (
        <>
            <section class="py-8">
                <div class="container text-center">
                    <h2 class="display-5 fw-bold logo-clr">Projects</h2>
                    <h4 class="mt-5 text-start">We Deliver Digital Experiences Your
                        Customers Love, By Design.
                    </h4>
                    <div class="position-relative mt-3">
                        <img src={project_img} class="img-fluid w-100 min-h" alt="project2" />
                            <div class="position-abso whitebg-opacity p-lg-5  text-start mt-3">
                                <img src={ncrrLogo} class="img-fluid w-25" alt="Project Logo" />
                                    <p class="mt-2">North California Railroad Company / A private corporation manages the 317 mile rail corridor NCRR requires
                                        a utility occupancy portal where customers can submit their details by signing up themselves They could submit their details as per their type of installation
                                        required and verify their purpose of installation. If they.....
                                    </p>
                                    <a href="project-description-nrc.html" class="btn position-relative px-4 btn-hover logo-clr shadow-none d-none d-lg-inline-block">Read More
                                        <span class="forward-icon"><i class="fas fa-long-arrow-alt-right fs-5"></i></span>
                                    </a>
                                    <div class="d-sm-flex mt-3 mt-lg-5 align-items-center">
                                        <div class="">
                                            <p class="lead mb-0">North California Railroad Company</p>
                                            <p>A private corporation manages the 317 mile rail corridor.
                                            </p>
                                        </div>
                                    </div>
                                    <a href="project-description-nrc.html" class="btn position-relative px-4 btn-hover logo-clr shadow-none d-inline-block d-lg-none mt-4">Read More
                                        <span class="forward-icon"><i class="fas fa-long-arrow-alt-right fs-5"></i></span>
                                    </a>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
