import React from 'react'
import migrationPageImg from '../img/migration&integration.jpg'

function MigrationIntigration() {
    return (
        <>
            <section className="pb-8 bg-career position-relative pt-350">
                <div className="about-absolute">
                    <div className="text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">Salesforce</h2>
                        <h3 className="mt-3">Migration and Integration</h3>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <img src={migrationPageImg} className="img-fluid object-fit-cover" alt="Maintenance and Support" />
                        </div>
                        <div className="col-lg-12 mt-4">
                            <p className="lead">
                                Data migration is a complex and tricky task that needs expertise
                                and the right technical methodologies. Migrating and integrating data from one CRM system to another has its own set of challenges.
                            </p>
                            <p className="lead">Salesforce migration and integration services by deploying the best practices to manage data, reduce risks, and eliminate errors.</p>
                            <p className="lead">Our Salesforce Migration and Integration experts work proficiently to deliver seamless and successful.</p>
                            <h6 className="fw-bold lead">How do we do it?</h6>
                            <ul>
                                <li className="lead">Mapping the plan</li>
                                <li className="lead">Selecting the data</li>
                                <li className="lead">Mapping the data</li>
                                <li className="lead">Migrating the data</li>
                                <li className="lead">Testing</li>
                                <li className="lead">Integrating the data</li>
                            </ul>

                        </div>
                    </div>
                    <h6 className="fw-bold lead">Our Services</h6>
                    <p className="lead">Kyra Technologies provide Salesforce third-party Integration solutions for:</p>
                    <ul>
                        <li className="lead">ERP Integration (Netsuite)</li>
                        <li className="lead">Marketing automation Integration</li>
                        <li className="lead">E-commerce integration (Magento, Shopify)</li>
                        <li className="lead">Collaboration systems integration and Personal Planner, and email integration</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MigrationIntigration
