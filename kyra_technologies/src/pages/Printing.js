import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectPrintingImg from '../img/Screenshot 2021-09-17 at 4.26.58 PM.png'

function Printing() {
    return (
        <>
            <Header />
            <section className="project-detail-banner position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 logo-clr fw-bold">Printing</h2>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <img src={ProjectPrintingImg} className="img-fluid mt-3 mt-md-5" alt='img' />
                        <h2 className="fw-bold mb-3 mt-4">Challenges for Client</h2>
                        <p>
                            Once a product is ready it will go to market or on e-commerce so each and every product should be labeled.
                            A labeled product plays a vital role in its increased demand and tells where its quality stands. Labelling a
                            product in bulk is not child play. A label works as a communicator between the manufacturer and the consumer.
                        </p>
                        <h2 className="fw-bold mb-3 pt-6">Solution Overview</h2>
                        <p>
                            Labeling a product will be an authenticity about its brand, quality and a displayed version about all the
                            details of the product. So our developers create systems where clients can be given unique labels and that are
                            labeled wisely and flawlessly. The beauty of this system is it can print labels hassle free as well as in bulk.
                            These prints are done by a zebra printer.
                        </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Printing
