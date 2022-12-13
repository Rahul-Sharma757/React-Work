import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectLisencingImg from '../img/Screenshot 2021-09-17 at 4.26.58 PM.png'

function Licensing() {
    return (
        <>
            <Header />
            <section className="project-detail-banner position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 logo-clr fw-bold">Licensing</h2>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <img src={ProjectLisencingImg} className="img-fluid mt-3 mt-md-5" alt='img' />
                        <h2 className="fw-bold mb-3 mt-4">Challenges for Client</h2>
                        <p>
                            Licensing is a software item which prevents replicated software. It needs to be activated. A license validation is required
                            for the software which should be done by the unique serial number and is used to generate a unique installation ID.
                        </p>
                        <h2 className="fw-bold mb-3 pt-6">Solution Overview</h2>
                        <p>
                            An item which is sold in the store needs to be activated. As purchase happens a unique link will be generated. This unique activation
                            link will be valid to access that particular item. Once the item is activated another unique code will appear which will be used for
                            software activation. This unique id should be used for a product which remains the same throughout the life of the product.
                            It prevents the license from being used again and again. Same way the licence can possibly be deactivated for the particular item.
                            The use of this system is applicable in case of replacement or any kind of repairs required for the product.
                        </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Licensing
