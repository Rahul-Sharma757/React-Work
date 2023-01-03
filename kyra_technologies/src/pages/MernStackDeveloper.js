import React from 'react'

function mernStackDeveloper() {
    return (
        <>
            <section class="pb-8 bg-career position-relative pt-350">
                <div class="about-absolute">
                    <div class="container-fluid text-center position-relative align-center">
                        <h2 class="display-4 fw-bold logo-clr">MERN Stack Developer</h2>
                        <h3 class="mt-3">Experience 1 - 2 Years</h3>
                    </div>
                </div>
            </section>
            <section class="pb-8">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <ul class="px-0">
                                <h3 class="mb-3">LPA</h3>
                                <li class="fs-5 mb-1">Have worked in node js as a backend for at least 2.5+ years.</li>
                                <li class="fs-5 mb-1">Good Understanding of Typescript.</li>
                                <li class="fs-5 mb-1">Strong communication skills and should have worked with US clients earlier.</li>
                                <li class="fs-5 mb-1">Have good exposure to Event-driven programming.</li>
                                <li class="fs-5 mb-1">Have knowledge of serverless.</li>
                                <li class="fs-5 mb-1">Have good analytical skills.</li>
                                <li class="fs-5 mb-1">Have worked on oops-based javascript programming.</li>
                                <li class="fs-5 mb-1">Have a good understanding of es6.</li>
                                <li class="fs-5 mb-1">Have worked in rxjs.</li>
                                <li class="fs-5 mb-1">Good Understanding of microservices.</li>
                                <li class="fs-5 mb-1">Have an understanding of AWS services (Lambda, API gateway, sns, sqs, athena, glue, CloudFront).</li>
                                <li class="fs-5 mb-1">Have good exposure in working on promises and a good understanding of async libraries.</li>
                                <li class="fs-5 mb-1">Knowledge of Payment Gateways is an additional advantage.</li>
                                <li class="fs-5 mb-1">Have worked with one of the NoSQL databases.</li>
                                <li class="fs-5 mb-1">Knowledge of RDBMS is an extra advantage.</li>
                                <li class="fs-5 mb-1">Have developed 2-3 customer-facing websites with Angular/React/Vue.</li>
                                <li class="fs-5 mb-1">Knowledge of lazy loading.</li>
                                <li class="fs-5 mb-1">Have an understanding of stateful and stateless modules.</li>
                                <li class="fs-5 mb-1">Have hands-on experience in html5 and css3.</li>
                                <li class="fs-5 mb-1">Have experience in integration with 3rd party libraries.</li>
                            </ul>
                        </div>
                        <div class="col-lg-6 mt-3 mt-lg-0">
                            <p class="lead fw-bold">Personal Details</p>
                            <form method="post" id="reused_form" encType="&quot;multipart/form-data&quot;">
                                <div class="form-group mb-3">
                                    <label htmlFor="for Post">Post:</label>
                                    <input type="text" class="form-control pe-none" id="for Post" name="for Post" value="Mern Stack Developer" required="" maxLength="500" />
                                </div>
                                <div class="form-group mb-3">
                                    <label htmlFor="name"> Name:</label>
                                    <input type="text" class="form-control" id="name" name="name" required="" maxLength="50" />
                                </div>
                                <div class="form-group mb-3">
                                    <label htmlFor="email"> Email:</label>
                                    <input type="email" class="form-control" id="email" name="email" required="" maxLength="50" />
                                </div>
                                <div class="form-group mb-3">
                                    <label htmlFor="num">Mobile No.</label>
                                    <input type="tel" class="form-control no-arrow" id="phone" size="10" required="" maxLength="10" />
                                    <small class="text-muted">Accept only numeric characters.</small>
                                </div>
                                <div class="form-group mb-3">
                                    <label htmlFor="name"> Resume Upload:</label>
                                    <input type="file" class="form-control" id="image" name="image" accept=".pdf,.docx" required="" />
                                    <small class="text-muted">Accept only .pdf / .docx files only.</small>
                                </div>
                                <div class="text-end">
                                    <button type="submit" class="btn btn-lg position-relative py-2 mt-3 px-4 btn-hover shadow-none logo-clr pull-right" id="btnContactUs">Post It! →</button>
                                </div>
                            </form>
                            <div id="success_message" style={{ width: '100%', height: '100%', display: 'none' }}> <h3>Sent your message successfully!</h3> </div>
                            <div id="error_message" style={{ width: '100%', height: '100%', display: 'none' }}> <h3>Error</h3> Sorry there was an error sending your form. </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default mernStackDeveloper
