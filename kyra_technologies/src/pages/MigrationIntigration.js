import React from 'react'
import Header from '../components/Header'
import moduleName from 'module'

function MigrationIntigration() {
    return (
        <>
            <Header />
            <section class="pb-8 bg-career position-relative pt-350">
                <div class="about-absolute">
                    <div class="text-center position-relative align-center">
                        <h2 class="display-4 fw-bold logo-clr">Salesforce</h1>
                        <h3 class="mt-3">Migration and Integration</h3>
                    </div>
                </div>
            </section>
            <section class="pb-8">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <img src="img/migration&integration.jpg" class="img-fluid object-fit-cover" alt="Maintenance and Support" />
                        </div>
                        <div class="col-lg-12 mt-4">
                            <p class="lead">
                                Data migration is a complex and tricky task that needs expertise
                                and the right technical methodologies. Migrating and integrating data from one CRM system to another has its own set of challenges.
                            </p>
                            <p class="lead">Salesforce migration and integration services by deploying the best practices to manage data, reduce risks, and eliminate errors.</p>
                            <p class="lead">Our Salesforce Migration and Integration experts work proficiently to deliver seamless and successful.</p>
                            <h6 class="fw-bold lead">How do we do it?</h6>
                            <ul>
                                <li class="lead">Mapping the plan</li>
                                <li class="lead">Selecting the data</li>
                                <li class="lead">Mapping the data</li>
                                <li class="lead">Migrating the data</li>
                                <li class="lead">Testing</li>
                                <li class="lead">Integrating the data</li>
                            </ul>

                        </div>
                    </div>
                    <h6 class="fw-bold lead">Our Services</h6>
                    <p class="lead">Kyra Technologies provide Salesforce third-party Integration solutions for:</p>
                    <ul>
                        <li class="lead">ERP Integration (Netsuite)</li>
                        <li class="lead">Marketing automation Integration</li>
                        <li class="lead">E-commerce integration (Magento, Shopify)</li>
                        <li class="lead">Collaboration systems integration and Personal Planner, and email integration</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MigrationIntigration
