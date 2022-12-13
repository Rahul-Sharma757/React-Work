import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import crc from '../img/Screenshot 2021-09-17 at 4.27.32 PM.png'

function CRC() {
    return (
        <>
            <Header />
            <section className="project-detail-banner2 position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">CRC</h2>
                        <h3 className="mt-3">Client - CS</h3>
                        <p className="lead">Industry - App Development</p>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <img src={crc} className="img-fluid mt-3 mt-md-5" alt='img' />
                        <h2 className="fw-bold mb-3 mt-4">Challenges for Client</h2>
                        <p>
                            Any enterprise who is producing or manufacturing needs, A partner.
                            “A partner” can be any external organization that plays an integral role
                            or may be outside the facility in the enterprise and whose business fortune
                            depends wholly or partially on the success of the enterprise. So a system
                            is required to manage these partners. These partners will assist them for the
                            repairs of the product for eligible buyers.
                        </p>
                        <p>
                            Moving forward, how to keep track of these partners/repairers? How to get the
                            details of the product which needs to be repaired, who will repair it? How to get
                            approval from a brand? Not to mention that there are always exceptions like if the
                            product is not under warranty but the company believes it is in the best interest
                            of the relationship to cover the repair under warranty. What would be the process?
                        </p>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <h2 className="fw-bold mb-3 mt-lg-0 mt-4">Solution Overview</h2>
                    <p>
                        Providing a solution to something which is done manually earlier.
                        A system is provided for repairs where availability of product and its components
                        can be seen in a specific area and the repairer will cater the parts lists to those products.
                        The system will be collecting product details as well as consumer details. To assist our client
                        an ERP solution is provided where the repairs system is for the repairs of products outside the
                        facility for partners that can be done on the basis of warranty of product. A warranty can be
                        checked via Activation application, if it is not validated then a memo will be sent to the consumer for the same.
                    </p>
                    <p>Likewise another system is created if the repair can be done inside the facility.
                        In other words every company has their local repairs which can be known as Dealer
                        level Repair. They have their own repairing system which is built on salesforce.
                        It needs to keep a check on repairs. Either the product can be repaired in the centre
                        or can be sent back to the manufacturer or consumer. A mail notification should go in
                        both scenarios. The app also allows the dealer and consumer to know about if any freight
                        charges or labour charges are required or not. If any kind of payment is required against
                        repair then the confirmation should be sent to the consumer. In case of any errors or failure
                        of payment the email needs to clearly communicate so that the customer can attempt again.
                        Once repair is done notification of shipment and tracking information will be sent to the customer.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CRC
