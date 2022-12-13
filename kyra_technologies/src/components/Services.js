import React from 'react'

export default function Services() {
  return (
    <>
      <section className="py-8 bg-grey">
        <div className="container text-center">
          <h2 className="display-5 fw-bold logo-clr">Services</h2>
          <h4 className="mt-3">We strive to provide quality digital products at the best value.</h4>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="card border-0 text-start p-4  p-services rounded-lg position-relative hover-show">
                <i className="fab fa-app-store-ios fs-4r"></i>
                <h4 className="mt-8 miss">Custom Apps</h4>
                <div className="position-absolute px-4 text-start show-hover w-100 overflow-hidden">
                  <h4 className="mt-8-5">Custom Apps</h4>
                  <ul type="none" className="ps-0">
                    <li>
                      <a href="/mobileAppDevelopmentPage" className="text-decoration-none text-dark">
                        <div className="d-flex mb-2">
                          <div className="w-10 text-start"><i className="fab fa-apple"></i></div>
                          <div className="bottom-hover">Mobile App Development</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/webAppDevelopment" className="text-decoration-none text-dark">
                        <div className="d-flex">
                          <div className="w-10 text-start"><i className="far fa-browser"></i></div>
                          <div className="bottom-hover">Web App Development</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div className="card border-0 text-start p-4 rounded-lg position-relative hover-show">
                <i className="fab fa-app-store-ios fs-4r"></i>
                <h4 className="mt-8 miss">Salesforce</h4>
                <div className="position-absolute px-4 text-start show-hover w-100 overflow-hidden">
                  <h4 className="mt-8-5">Salesforce</h4>
                  <ul type="none" className="ps-0">
                    <li><a href="/maintainanceSupportPage" className="text-decoration-none text-dark">
                      <div className="d-flex mb-2">
                        <div className="w-10 text-start"><i className="fas fa-headset"></i></div>
                        <div className="bottom-hover">Maintenance and Support</div>
                      </div>
                    </a></li>
                    <li><a href="/migrationIntigrationPage" className="text-decoration-none text-dark">
                      <div className="d-flex mb-2">
                        <div className="w-10 text-start"><i className="fas fa-network-wired"></i></div>
                        <div className="bottom-hover">Migration and Integration</div>
                      </div>
                    </a></li>
                    <li><a href="/consultingPage" className="text-decoration-none text-dark">
                      <div className="d-flex mb-2">
                        <div className="w-10 text-start"><i className="far fa-browser"></i></div>
                        <div className="bottom-hover">Consulting</div>
                      </div>
                    </a></li>
                    <li><a href="/lightingPage" className="text-decoration-none text-dark">
                      <div className="d-flex">
                        <div className="w-10 text-start"><i className="fas fa-bolt"></i></div>
                        <div className="bottom-hover">Lighting</div>
                      </div>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div className="card border-0 text-start p-4 rounded-lg position-relative hover-show">
                <i className="fab fa-connectdevelop fs-4r"></i>
                <h4 className="mt-8 miss">UI/UX</h4>
                <div className="position-absolute px-4 text-start show-hover w-100 overflow-hidden">
                  <h4 className="mt-8-5">UI/UX</h4>
                  <ul type="none" className="ps-0">
                    <li className="me-auto"><a href="/ux_researchPage" className="text-decoration-none text-dark">
                      <div className="d-flex mb-2">
                        <div className="w-10 text-start"><i className="fab fa-searchengin"></i></div>
                        <div className="bottom-hover">UX Research</div>
                      </div>
                    </a></li>
                    <li className="me-auto"><a href="/ui_animationPage" className="text-decoration-none text-dark">
                      <div className="d-flex mb-2">
                        <div className="w-10 text-start"><i className="fas fa-radiation-alt"></i></div>
                        <div className="bottom-hover">UI & Animation</div>
                      </div>
                    </a></li>
                    <li className="me-auto"><a href="/designTestingPage" className="text-decoration-none text-dark">
                      <div className="d-flex mb-2">
                        <div className="w-10 text-start"><i className="fas fa-paint-brush"></i></div>
                        <div className="bottom-hover">Design Testing</div>
                      </div>
                    </a></li>
                    <li className="me-auto"><a href="/productDesignPage" className="text-decoration-none text-dark">
                      <div className="d-flex">
                        <div className="w-10 text-start"><i className="fab fa-product-hunt"></i></div>
                        <div className="bottom-hover">Product Design</div>
                      </div>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="/ServicesPage" className="btn position-relative px-4 py-2 btn-hover logo-clr shadow-none">More Services
              <span className="forward-icon"><i className="fas fa-long-arrow-alt-right fs-5"></i></span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
