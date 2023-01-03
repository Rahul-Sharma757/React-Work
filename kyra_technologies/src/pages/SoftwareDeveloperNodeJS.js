import React from 'react'

function SoftwareDeveloperNodeJS() {
    return (
        <>
            <section className="pb-8 bg-career position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">Node Js Developer</h2>
                        <h3 className="mt-3">Experience 1 - 3 Years</h3>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="lead fw-bold">Job Brief</p>
                            <p>We are looking for an experienced Back-end developer to join our IT team.
                                You will be responsible for the server side of our web applications.
                            </p>
                            <p>
                                If you have excellent programming skills and a passion
                                for developing applications or improving existing ones,
                                we would like to meet you. As a Back-end developer,
                                you’ll work closely with our engineers to ensure system consistency and improve user experience.
                            </p>
                            <p>
                                Ultimately, you should be able to develop and maintain functional
                                and stable web applications to meet our company’s needs.
                            </p>
                            <p className="lead fw-bold">Responsibilities</p>
                            <ul className="">
                                <li className="mb-1">Participate in the entire application lifecycle, focusing on coding and debugging.</li>
                                <li className="mb-1">Write clean code to develop functional web applications.</li>
                                <li className="mb-1">Troubleshoot and debug applications.</li>
                                <li className="mb-1">Perform UI tests to optimize performance.</li>
                                <li className="mb-1">Manage cutting-edge technologies to improve legacy applications</li>
                                <li className="mb-1">Collaborate with Front-end developers to integrate user-facing elements with server side logic.</li>
                                <li className="mb-1">Gather and address technical and design requirements.</li>
                                <li className="mb-1">Provide training and support to internal teams.</li>
                                <li className="mb-1">Build reusable code and libraries for future use</li>
                                <li className="mb-1">Liaise with developers, designers and system administrators to identify new features</li>
                                <li>Follow emerging technologies</li>
                            </ul>
                            <p className="lead fw-bold">Requirements</p>
                            <ul className="">
                                <li className=" mb-1">Should have excellent problem solving and logical skills</li>
                                <li className=" mb-1">Should be proficient with Node.js and JavaScript design patterns</li>
                                <li className=" mb-1">Should know how to develop RESTful APIs that read and write JSON</li>
                                <li className=" mb-1">Experienced in databases like MongoDB, Redis, or any NoSQL database</li>
                                <li className=" mb-1">Should have proficient understanding of code versioning tools, such as Git</li>
                                <li className=" mb-1">Should have the ability to plan and execute projects to deliver in time and with quality</li>
                                <li className="">Highly motivated individual to learn and to mentor project members</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 mt-3 mt-lg-0">
                            <p className="lead fw-bold">Personal Details</p>
                            <form method="post" id="reused_form" encType="&quot;multipart/form-data&quot;">
                                <div className="form-group mb-3">
                                    <label htmlFor="for Post">Post:</label>
                                    <input type="text" className="form-control pe-none" id="for Post" name="for Post" value="Node js Developer" required="" maxLength="500" />
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
                                    <input type="tel" className="form-control no-arrow" id="phone" size="10" required="" maxLength="10" />
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

export default SoftwareDeveloperNodeJS
