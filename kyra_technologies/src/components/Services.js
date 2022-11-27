import React from 'react'

export default function Services() {
  return (
    <>
      <section class="py-8 bg-grey">
        <div class="container text-center">
          <h2 class="display-5 fw-bold logo-clr">Services</h2>
          <h4 class="mt-3">We strive to provide quality digital products at the best value.</h4>
          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="card border-0 text-start p-4  p-services rounded-lg position-relative hover-show">
                <i class="fab fa-app-store-ios fs-4r"></i>
                <h4 class="mt-8 miss">Custom Apps</h4>
                <div class="position-absolute px-4 text-start show-hover w-100 overflow-hidden">
                  <h4 class="mt-8-5">Custom Apps</h4>
                  <ul type="none" class="ps-0">
                    <li>
                      <a href="mobile-app-development.html" class="text-decoration-none text-dark">
                        <div class="d-flex mb-2">
                          <div class="w-10 text-start"><i class="fab fa-apple"></i></div>
                          <div class="bottom-hover">Mobile App Development</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="web-app-development.html" class="text-decoration-none text-dark">
                        <div class="d-flex">
                          <div class="w-10 text-start"><i class="far fa-browser"></i></div>
                          <div class="bottom-hover">Web App Development</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mt-3 mt-lg-0">
              <div class="card border-0 text-start p-4 rounded-lg position-relative hover-show">
              <i class="fab fa-app-store-ios fs-4r"></i>
                <h4 class="mt-8 miss">Salesforce</h4>
                <div class="position-absolute px-4 text-start show-hover w-100 overflow-hidden">
                  <h4 class="mt-8-5">Salesforce</h4>
                  <ul type="none" class="ps-0">
                    <li><a href="maintenance-support.html" class="text-decoration-none text-dark">
                      <div class="d-flex mb-2">
                        <div class="w-10 text-start"><i class="fas fa-headset"></i></div>
                        <div class="bottom-hover">Maintenance and Support</div>
                      </div>
                    </a></li>
                    <li><a href="migration-integration.html" class="text-decoration-none text-dark">
                      <div class="d-flex mb-2">
                        <div class="w-10 text-start"><i class="fas fa-network-wired"></i></div>
                        <div class="bottom-hover">Migration and Integration</div>
                      </div>
                    </a></li>
                    <li><a href="consulting.html" class="text-decoration-none text-dark">
                      <div class="d-flex mb-2">
                        <div class="w-10 text-start"><i class="far fa-browser"></i></div>
                        <div class="bottom-hover">Consulting</div>
                      </div>
                    </a></li>
                    <li><a href="lighting.html" class="text-decoration-none text-dark">
                      <div class="d-flex">
                        <div class="w-10 text-start"><i class="fas fa-bolt"></i></div>
                        <div class="bottom-hover">Lighting</div>
                      </div>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mt-3 mt-lg-0">
              <div class="card border-0 text-start p-4 rounded-lg position-relative hover-show">
                <i class="fab fa-connectdevelop fs-4r"></i>
                <h4 class="mt-8 miss">UI/UX</h4>
                <div class="position-absolute px-4 text-start show-hover w-100 overflow-hidden">
                  <h4 class="mt-8-5">UI/UX</h4>
                  <ul type="none" class="ps-0">
                    <li class="me-auto"><a href="ux-research.html" class="text-decoration-none text-dark">
                      <div class="d-flex mb-2">
                        <div class="w-10 text-start"><i class="fab fa-searchengin"></i></div>
                        <div class="bottom-hover">UX Research</div>
                      </div>
                    </a></li>
                    <li class="me-auto"><a href="ui-animation.html" class="text-decoration-none text-dark">
                      <div class="d-flex mb-2">
                        <div class="w-10 text-start"><i class="fas fa-radiation-alt"></i></div>
                        <div class="bottom-hover">UI & Animation</div>
                      </div>
                    </a></li>
                    <li class="me-auto"><a href="design-testing.html" class="text-decoration-none text-dark">
                      <div class="d-flex mb-2">
                        <div class="w-10 text-start"><i class="fas fa-paint-brush"></i></div>
                        <div class="bottom-hover">Design Testing</div>
                      </div>
                    </a></li>
                    <li class="me-auto"><a href="product-design.html" class="text-decoration-none text-dark">
                      <div class="d-flex">
                        <div class="w-10 text-start"><i class="fab fa-product-hunt"></i></div>
                        <div class="bottom-hover">Product Design</div>
                      </div>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5">
            <a href="services.html" class="btn position-relative px-4 py-2 btn-hover logo-clr shadow-none">More Services
              <span class="forward-icon"><i class="fas fa-long-arrow-alt-right fs-5"></i></span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
