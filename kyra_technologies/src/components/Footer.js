import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {


    return (
        <div className='wrapper'>
            <section className="pt-6 footer-bg">
                <div className="container text-center">
                    <div className="d-md-flex align-items-center justify-content-center mt-3">
                        <Link to="mailto:hr@prlxweb.com" className="text-decoration-none text-dark fs-5 ms-4">
                            <div className="d-flex justify-content-center">
                                <div className="w-10 text-center"><i className="far fa-envelope"></i></div>
                                <div className="bottom-hover ms-3">hr@prlxweb.com</div>
                            </div>
                        </Link>
                    </div>
                    <p className="fs-6 mt-1">E-309, Second Floor, Industrial Area Phase 8A, Mohali 160055, India</p>
                    <Link to=' ' className="btn py-2 position-relative px-4 btn-hover shadow-none logo-clr" data-bs-toggle="modal" data-bs-target="#exampleModalContact">Say Hii!
                        <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
                    </Link>
                    <div className="modal fade" id="exampleModalContact" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content footer-bg">
                                <div className="text-center mt-3">
                                    <button type="button" className="btn-close shadow-none bg-grey p-3 rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body position-relative">
                                    <div className="container">
                                        <div className="row">
                                            <h2 className="display-4 fw-bold logo-clr text-center">Contact</h2>
                                            <p className="lead text-center">Getting in touch with us is not difficult at all.</p>
                                            <div className="col-lg-6 mt-3">
                                                <iframe name="hiddenFrame" className="w-100 h-250" id="hiddenFrame" title='contactForm'></iframe>
                                                <form id="contactForm" action="Contact.php" target="hiddenFrame" method="post">
                                                    <div className="form-group mb-3 text-start">
                                                        <label htmlFor="name" className="lead">Name</label>
                                                        <input type="text" className="form-control py-2" id="name" name="name" placeholder="enter your name" />
                                                    </div>
                                                    <div className="form-group mb-3 text-start">
                                                        <label htmlFor="mail" className="lead">E-mail</label>
                                                        <input type="email" id="mail" className="form-control py-2" name="email" placeholder="name@domain.com" required />
                                                    </div>
                                                    <div className="form-group mb-3 text-start">
                                                        <label htmlFor="company" className="lead">Company</label>
                                                        <input type="text" className="form-control py-2" name="company" placeholder="enter your company name" required />
                                                    </div>
                                                    <div className="form-group mb-3 text-start d-none">
                                                        <label htmlFor="sub"></label>
                                                        <input type="text" id="sub" className="form-control py-2" name="subject" placeholder="Do not fill this!" disabled />
                                                    </div>
                                                    <div className="form-group mb-3 text-start">
                                                        <label htmlFor="message" id="message" className="lead">Message</label>
                                                        <textarea name="message" className="form-control py-2" placeholder="Your Message" required></textarea>
                                                    </div>
                                                    <div className="form-group text-start mt-5">
                                                        <input type="submit" id="submition" className="btn py-2 position-relative px-4 btn-hover shadow-none logo-clr" value="Send Message" /> <br />
                                                        <lable htmlFor='submition' className="text-muted mt-2"><small>Please fill the form first to enable the Button.</small></lable>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-6 mt-3 p-3 text-start">
                                                <div className="d-sm-flex">
                                                    <Link to="tel:+91-9041119889" className="text-decoration-none text-dark">
                                                        <div className="d-alex justify-content-start align-items-center">
                                                            <span><i className="fal fa-phone-volume me-3 fs-4"></i></span>
                                                            <span className="fs-5">+91-9041119889</span>
                                                        </div>
                                                    </Link>
                                                    <Link to="mailto:hr@prlxweb.com" className="text-decoration-none text-dark ms-4">
                                                        <div className="d-alex justify-content-start align-items-center">
                                                            <span><i className="far fa-envelope me-3 fs-4"></i></span>
                                                            <span className="fs-5">hr@prlxweb.com</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <p className="mt-3 fs-5">E-309, Second Floor, Industrial Area Phase 8A, <br />
                                                    Mohali 160055, India
                                                </p>
                                                <p className="fs-5-5 text-start">All the personal information that you submit on the
                                                    website - (Name, Email, Phone and Project Details) will not be sold, shared or rented to others.
                                                    Our sales team or the team of mobile app developers only use this information to
                                                    send updates about our company and projects or contact you if requested or find it necessary.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-3 footer-bg">
                <div className="container text-center">
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to="/privacyPolicy" className="text-decoration-none text-dark fs-17 bottom-hover">Privacy Policy</Link> <br />
                        <span className="fs-17"><i className="far fa-copyright"></i> 2016-2021</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
