import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import whyusImg from '../img/whyus';
import iosImg from '../img/ios.jpg';
function MobileAppDevelopment() {
    return (
        <>
            <Header />
            <section className="pb-8 bg-career position-relative pt-350">
                <div className="about-absolute">
                    <div className="Container text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">Custom Apps</h2>
                        <h3 className="mt-3">Mobile App Development</h3>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <h4 className="mb-3">Why Us?</h4>
                            <p className="d-md-block d-none">Ready-made components are something we need today.
                                We all use Mobile apps in our day to day life. Today a number of applications come and go.
                                So when it comes to mobile apps it should be built beautifully, creative and functional and we intrigue you with smooth access.
                                All the users are craving for high performances as well as it should be secure and they are more valuable when they are customized.
                            </p>
                            <p className="d-md-block d-none">
                                Our developers design engaging apps. With the foresight vision they not only make it creative but easy-accessible.
                                Our developers not only talk about technologies,
                                platforms and languages but we understand your vision to grow your business.
                                and inspire your customers to use it.
                            </p>

                        </div>
                        <div className="col-md-6">

                            <img src={whyusImg} className="img-fluid h-100 obj-fit-cover" alt="why us ?" />

                        </div>
                        <p className="d-md-none d-block mt-3">Ready-made components are something we need today.
                            We all use Mobile apps in our day to day life. Today a number of applications come and go.
                            So when it comes to mobile apps it should be built beautifully, creative and functional and we intrigue you with smooth access.
                            All the users are craving for high performances as well as it should be secure and they are more valuable when they are customized.
                        </p>
                        <p className="d-md-none d-block">
                            Our developers design engaging apps. With the foresight vision they not only make it creative but easy-accessible.
                            Our developers not only talk about technologies,
                            platforms and languages but we understand your vision to grow your business.
                            and inspire your customers to use it.
                        </p>
                    </div>
                    <div className="row flex-row-reverse mt-5">
                        <div className="col-md-6">
                            <h4 className="mb-3">Why IOS?</h4>
                            <p className="d-md-block d-none">
                                Mobile apps not only used commercially but it builds on the platforms based on the source provided by you in the form of cookies.
                                Think over the photo you have clicked, Types of places you visit, kind of food you like,
                                your banking and any other kind of activity you don't want to share but can store on your
                                phone that's where we Kyra Technologies came in picture and has worked for IOS Apps.
                            </p>
                            <p className="d-md-block d-none">
                                IOS is recognised for its reliable operating system and great performance.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={iosImg} className="img-fluid h-75 w-100 obj-fit-cover" alt="ios" />
                        </div>
                        <p className="d-md-none d-block mt-3">
                            Mobile apps not only used commercially but it builds on the platforms based on the source provided by you in the form of cookies.
                            Think over the photo you have clicked, Types of places you visit, kind of food you like,
                            your banking and any other kind of activity you don't want to share but can store on your
                            phone that's where we Kyra Technologies came in picture and has worked for IOS Apps.
                        </p>
                        <p className="d-md-none d-block">
                            IOS is recognised for its reliable operating system and great performance.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MobileAppDevelopment
