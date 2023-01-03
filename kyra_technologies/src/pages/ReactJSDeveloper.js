import React from 'react'

function ReactJSDeveloper() {
    return (
        <>
            <section className="pb-8 bg-career position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">React Js Developer</h2>
                        <h3 className="mt-3">Experience 1 - 3 Years</h3>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="lead fw-bold">Job Description</p>
                            <p>We are looking for a great JavaScript developer who is proficient with React.js.
                                Your primary focus will be on developing user interface components and implementing them
                                following well-known React.js workflows (such as Flux or Redux). You will ensure that these
                                components and the overall application are robust and easy to maintain. You will coordinate
                                with the rest of the team working on different layers of the infrastructure. Therefore, a
                                commitment to collaborative problem solving, sophisticated design, and quality product is important.
                            </p>
                            <p className="lead fw-bold">Responsibilities</p>
                            <p className="lead">Building reusable components and front-end libraries for future use.</p>
                            <ul>
                                <li className="mb-1">Experience with popular React.js workflows (such as Flux or Redux).</li>
                                <li className="mb-1">Translating designs and wireframes into high quality code.</li>
                                <li className="mb-1">Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.</li>
                                <li className="mb-1">Thorough understanding of React.js and its core principles.</li>
                                <li className="mb-1">Experience with data structure libraries (e.g., Immutable.js).</li>
                                <li className="mb-1">Familiarity with RESTful APIs.</li>
                            </ul>
                            <p className="lead fw-bold">Skills</p>
                            <ul>
                                <li className="mb-1">Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
                                <li className="mb-1">Thorough understanding of React.js and its core principles</li>
                                <li className="mb-1">Experience with popular React.js workflows (such as Flux or Redux)</li>
                                <li className="mb-1">Familiarity with newer specifications of EcmaScript</li>
                                <li className="mb-1">Experience with data structure libraries (e.g., Immutable.js)</li>
                                <li className="mb-1">Knowledge of isomorphic React is a plus</li>
                                <li className="mb-1">Familiarity with RESTful APIs</li>
                                <li className="mb-1">Knowledge of modern authorization mechanisms, such as JSON Web Token</li>
                                <li className="mb-1">Familiarity with modern front-end build pipelines and tools</li>
                                <li className="mb-1">Experience with common front-end development tools such as Babel, Webpack, NPM, etc.</li>
                                <li className="mb-1">Ability to understand business requirements and translate them into technical requirements</li>
                                <li className="mb-1">A knack for benchmarking and optimization</li>
                                <li className="mb-1">Familiarity with code versioning tools such as Git.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 mt-3 mt-lg-0">
                            <p className="lead fw-bold">Personal Details</p>
                            <form method="post" id="reused_form" encType="&quot;multipart/form-data&quot;">
                                <div className="form-group mb-3">
                                    <label htmlFor="for Post">Post:</label>
                                    <input type="text" className="form-control pe-none" id="for Post" name="for Post" value="React js Developer" required="" maxLength="500" />
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

export default ReactJSDeveloper
