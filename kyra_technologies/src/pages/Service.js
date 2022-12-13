import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Service() {
  return (
    <>
      <Header />
      <section className="pb-8 bg-about position-relative pt-350">
        <div className="about-absolute">
          <div className="container-fluid text-center position-relative align-center">
            <h2 className="display-4 fw-bold logo-clr">Services</h2>
            <h3 className="mt-3">We strive to provide quality digital products at the best value.</h3>
          </div>
        </div>
      </section>
      <section className="pb-8">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4">
              <div className="card bg-grey border-0 text-start p-4 rounded-lg position-relative hover-show">
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
              <div className="card bg-grey border-0 text-start p-4 rounded-lg position-relative hover-show">
                <i className="fab fa-salesforce fs-4r"></i>
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
              <div className="card bg-grey border-0 text-start p-4 rounded-lg position-relative hover-show">
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
          <div className="row mt-3 mt-lg-4">
            <div className="col-lg-4">
              <div className="card bg-grey border-0 text-start p-4 rounded-lg position-relative hover-show">
                <i className="far fa-browser fs-4r"></i>
                <h4 className="mt-8 miss">Web Development</h4>
                <div className="position-absolute px-4 text-start show-hover w-100 overflow-hidden">
                  <h4 className="mt-8-5">Web Development</h4>
                  <ul type="none" className="ps-0">
                    <li>
                      <a href="/phpDevelopmentPage" className="text-decoration-none text-dark">
                        <div className="d-flex mb-2">
                          <div className="w-10 text-start"><i className="fab fa-php"></i></div>
                          <div className="bottom-hover">PHP Development</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/mernStackDevelopment" className="text-decoration-none text-dark">
                        <div className="d-flex mb-2">
                          <div className="w-10 text-start"><i className="fas fa-file-code"></i></div>
                          <div className="bottom-hover">MERN Stack Development</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/nodeJsDevelopment" className="text-decoration-none text-dark">
                        <div className="d-flex mb-2">
                          <div className="w-10 text-start"><i className="fab fa-node-js"></i></div>
                          <div className="bottom-hover">Node Js Development</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/reactJsDevelopment" className="text-decoration-none text-dark">
                        <div className="d-flex">
                          <div className="w-10 text-start"><i className="fab fa-js"></i></div>
                          <div className="bottom-hover">React Js Development</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div className="card bg-grey border-0 text-start p-4 rounded-lg position-relative hover-show">
                <i className="fab fa-apple-pay fs-4r"></i>
                <h4 className="mt-8 miss">Mobile App Development</h4>
                <div className="position-absolute px-4 text-start show-hover w-100 overflow-hidden">
                  <h4 className="mt-8-5">Mobile App Development</h4>
                  <ul type="none" className="ps-0">
                    <li><a href="/ecommerceDevelopment" className="text-decoration-none text-dark">
                      <div className="d-flex mb-2">
                        <div className="w-10 text-start"><i className="fas fa-user-graduate"></i></div>
                        <div className="bottom-hover">E-commerce Development</div>
                      </div>
                    </a></li>
                    <li><a href="/reactNativeAppDevelopment" className="text-decoration-none text-dark">
                      <div className="d-flex mb-2">
                        <div className="w-10 text-start"><i className="fab fa-react"></i></div>
                        <div className="bottom-hover">React Native App Development</div>
                      </div>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div className="card bg-grey border-0 text-start p-4 rounded-lg position-relative hover-show">
                <i className="fas fa-user-graduate fs-4r"></i>
                <h4 className="mt-8 miss">CMS & E-commerce</h4>
                <div className="position-absolute px-4 text-start show-hover w-100 overflow-hidden">
                  <h4 className="mt-8-5">CMS & E-commerce</h4>
                  <ul type="none" className="ps-0">
                    <li><a href="/wordPressDevelopment" className="text-decoration-none text-dark">
                      <div className="d-flex mb-2">
                        <div className="w-10 text-start"><i className="fab fa-wordpress-simple"></i></div>
                        <div className="bottom-hover">Word press Development</div>
                      </div>
                    </a></li>
                    <li><a href="/ecommerceCmsDevelopment" className="text-decoration-none text-dark">
                      <div className="d-flex">
                        <div className="w-10 text-start"><i className="fas fa-user-graduate"></i></div>
                        <div className="bottom-hover">E-commerce Development</div>
                      </div>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Service
