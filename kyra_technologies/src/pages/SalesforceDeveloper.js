import React from 'react'

function SalesforceDeveloper() {
    return (
        <>
            <section className="pb-8 bg-career position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">Salesforce Developer</h2>
                        <h3 className="mt-3">Experience 1 - 2 Years</h3>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="px-0">
                                <h3 className="mb-3">LPA</h3>
                                <li className="fs-5 mb-1">1 year minimum as a Salesforce Developer with proven capability hands-on.</li>
                                <li className="fs-5 mb-1">Knowledge of Apex, VisualForce, Lightning, class.</li>
                                <li className="fs-5 mb-1">Good communication skills.</li>
                                <li className="fs-5 mb-1">Should be able to develop Visualforce pages, apps, Triggers and workflows.</li>
                                <li className="fs-5 mb-1">Must be Salesforce Certified.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 mt-3 mt-lg-0">
                            <p className="lead fw-bold">Personal Details</p>
                            <form method="post" id="reused_form" encType="&quot;multipart/form-data&quot;">
                                <div className="form-group mb-3">
                                    <label htmlFor="for Post">Post:</label>
                                    <input type="text" className="form-control pe-none" id="for Post" name="for Post" value="Salesforce Developer" required="" maxLength="500" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="name"> Name:</label>
                                    <input type="text" className="form-control" id="name" name="name" required="" maxLength="50" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email"> Email:</label>
                                    <input type="email" className="form-control" id="email" name="email" required="" maxLength="50" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="num">Mobile No.</label>
                                    <input type="tel" className="form-control no-arrow" /*onkeypress="return onlyNumberKey(event)"*/ id="phone" size="10" required="" maxLength="10" />
                                    <small className="text-muted">Accept only numeric characters.</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="name"> Resume Upload:</label>
                                    <input type="file" className="form-control" id="image" name="image" accept=".pdf,.docx" required="" />
                                    <small className="text-muted">Accept only .pdf / .docx files only.</small>
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-lg position-relative py-2 mt-3 px-4 btn-hover shadow-none logo-clr pull-right" id="btnContactUs">Post It! →</button>
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

export default SalesforceDeveloper
