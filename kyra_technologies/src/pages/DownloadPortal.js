import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectDownloadPortalImg from '../img/Screenshot 2021-09-17 at 4.26.58 PM.png'

function DownloadPortal() {
    return (
        <>
            <Header />
            <section class="project-detail-banner position-relative pt-350">
                <div class="about-absolute">
                    <div class="container-fluid text-center position-relative align-center">
                        <h2 class="display-4 logo-clr fw-bold">Download Portal</h2>
                    </div>
                </div>
            </section>
            <section class="pb-8">
                <div class="container">
                    <img src={ProjectDownloadPortalImg} class="img-fluid mt-3 mt-md-5" alt='img' />
                        <h2 class="fw-bold mb-3 mt-4">Challenges for Client</h2>
                        <p>
                            To make the user experience better software updates are available.  How to access those updates? Where can these updates be found?
                        </p>
                        <h2 class="fw-bold mb-3 pt-6">Solution Overview</h2>
                        <p>
                            Our developers created a portal where the softwares updates for all the manufacturer products can be downloaded.
                        </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DownloadPortal
