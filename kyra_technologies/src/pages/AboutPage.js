import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TeamImg from '../img/team.jpg';
import EnthusiastImg from '../img/TA5FSPY9H-UA4TP8PQQ-d8390cab0651-512.png';
import ArchImg from '../img/archi.png';
import TeamMemberImg1 from '../img/Senior.jpeg';
import TeamMemberImg2 from '../img/Senior2.jpeg';

function AboutPage() {
    return (
        <>
            <Header />
            <section className="pb-8 bg-about position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">About</h2>
                        <h3 className="mt-3">With Kyra Technologies quality is our top priority</h3>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container text-center">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <img src={TeamImg} className="img-fluid h-600 obj-fit-cover w-100" alt="team" />
                        </div>
                        <div className="col-lg-6 mt-3 mt-lg-0 text-start">
                            <p className="lead">Kyra Technologies does magic because our developers know how to solve a problem
                                and can improve a pre-existing problem to a solution. We follow principles, patterns and
                                practice to reassess your professional goals.
                            </p>
                            <p className="fs-6">From 2016 Kyra Technologies is achieving successful journey of developing software.
                                We offer Apps for the Web and Mobile platforms, Software automations,
                                ERP/CRP customisations and expansions.
                            </p>
                            <p className="fs-6">We are the team of technical expertise and innovative ideas
                                who believes in delivering projects on time and guarantee transparency,
                                satisfaction with utmost quality. Leveraging the power of technical skills
                                we deliver end to end solutions for million dollar funded small and medium enterprises.
                            </p>
                            <p className="fs-6">Our vision is to become a top IT company in web and mobile application
                                development not only in India and USA but throughout the world.
                                We create possibilities to empower our clients and business.
                            </p>
                            <p className="fs-6">Kyra Technologies is empowered with certified technical experts.
                                We believe in empowering individuals by elevating their skills and having them is the matter of privilege.
                                Our team guarantees faster delivery and save huge money and time of our clients
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <div className="row flex-row-reverse pt-6 text-start">
                        <div className="col-lg-7">
                            <h2 className="fw-bold logo-clr display-6 mb-3">Journey of an Enthusiast</h2>
                            <h5 className="fw-bold me-0 me-lg-5">As we all know a famous proverb “The thread follows the needle. If the needle doesn't pass, the thread doesn't follow”.</h5>
                            <p className="lead me-5 d-none d-lg-block">With the intention of making a creative software, Harvinder Singh, our founder, started his career in 2008.
                                With the knowledge of machinery, tools, techniques , designing, modifications and arrangement he achieved his
                                goal as “Kyra Technologies” in 2016. He started with developing websites then delivering digital products, with
                                the help of two developers. With his enthusiasm and unique science communications, He has been evolving since
                                half-decade by delivering transformative platforms to our partners. Prlx Web is the Brand Name of Kyra Technologies.
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <img src={EnthusiastImg} className="img-fluid h-100 obj-fit-cover" alt="Harvinder(Founder)" />
                        </div>
                    </div>
                    <p className="lead me-5 d-block d-lg-none mt-4">With the intention of making a creative software, Harvinder Singh, our founder, started his career in 2008.
                        With the knowledge of machinery, tools, techniques , designing, modifications and arrangement he achieved his
                        goal as “Kyra Technologies” in 2016. He started with developing websites then delivering digital products, with
                        the help of two developers. With his enthusiasm and unique science communications, He has been evolving since
                        half-decade by delivering transformative platforms to our partners. Prlx Web is the Brand Name of Kyra Technologies.
                    </p>
                    <div className="row pt-6 text-start align-items-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold logo-clr display-6 me-0 me-md-5">A Software Architect</h2>
                            <p className="lead me-0 me-md-5 d-none d-lg-block">
                                As the year passes, today's trend becomes degraded tomorrow.
                                We all are surrounded by technology and these technologies work
                                on operating systems. So our DEVELOPER develops in discipline and design professionally
                                by using the patterns and best upgraded practices. They design, Integrate, refactor and re-design webs.
                            </p>
                        </div>
                        <div className="col-lg">
                            <img src={ArchImg} className="img-fluid w-100 obj-fit-cover" alt="Harvinder(Founder)" />
                        </div>
                    </div>
                    <p className="lead me-0 me-md-5 d-block d-lg-none">
                        As the year passes, today's trend becomes degraded tomorrow.
                        We all are surrounded by technology and these technologies work
                        on operating systems. So our DEVELOPER develops in discipline and design professionally
                        by using the patterns and best upgraded practices. They design, Integrate, refactor and re-design webs.
                    </p>
                    <h2 className="fw-bold display-6 text-center pt-6">Team</h2>
                    <h4 className="mt-3 text-center fw-bold">We strive to provide quality digital products at the best value</h4>
                    <p className="lead text-center">Websites, SEO, Apps, Ecommerce, CMS, Blogs and static sites</p>
                    <div className="row mt-5 justify-content-center text-center">
                        <div className="col-md-4 col-sm-6">
                            <div className="card p-3 border-0">
                                <img src={EnthusiastImg} className="img-fluid w-50 mx-auto rounded-circle" alt='Founder' />
                                    <p className="lead mt-3 mb-1">Harvinder Singh</p>
                                    <p className="text-muted">Founder</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card p-3 border-0">
                                <img src={TeamMemberImg1} className="img-fluid w-50 mx-auto rounded-circle" alt='Team Member 1' />
                                    <p className="lead mt-3 mb-1">Raj Bhatia</p>
                                    <p className="text-muted">Senior Software Engineer</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card p-3 border-0">
                                <img src={TeamMemberImg2} className="img-fluid w-50 mx-auto rounded-circle" alt='Team Member 2' />
                                    <p className="lead mt-3 mb-1">Sudhir Kaushal</p>
                                    <p className="text-muted">Front-end Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutPage
