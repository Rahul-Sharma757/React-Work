import React from 'react'

function Banner() {
  return (
    <section class="py-8 bg-front-banner h100vh">
        <div class="front-absolute">
            <div class="container text-center transform-center">
                <h1 class="display-4 fw-bold logo-clr fs-display-4">
                    Our automations sustain a flourishing relationship with your customers.
                </h1>
                <h3>Websites, SEO, Apps, Ecommerce, <br class="d-none d-md-block" /> CMS, Blogs and static sites</h3>
            </div>
            <div class="mouse-scroll top-50">
                <a href="#about">
                    <span class="mouse">
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
