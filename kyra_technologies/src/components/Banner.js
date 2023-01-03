import React from 'react';
function Banner() {
    return (
        <section className="py-8 bg-front-banner h100vh">
            <div className="front-absolute">
                <div className="container text-center transform-center">
                    <h1 className="display-4 fw-bold logo-clr fs-display-4">
                        Our automations sustain a flourishing relationship with your customers.
                    </h1>
                    <h3>Websites, SEO, Apps, Ecommerce, <br className="d-none d-md-block" /> CMS, Blogs and static sites</h3>
                </div>
                <div className="mouse-scroll top-50">
                    <a href="#about">
                        <span className="mouse">
                            <span></span>
                        </span>
                    </a>
                    <p>Scroll me</p>
                </div>
            </div>
        </section>
    )
}

export default Banner
