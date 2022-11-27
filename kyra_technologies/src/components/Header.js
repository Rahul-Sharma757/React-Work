import React from 'react'

function Header() {
    return (
        <>
            <div class="container-fluid">
                <nav class="navbar navbar-light px-2 px-md-4 fixed-top hide transi py-0" id="upScroll">
                    <div class="container-fluid">
                        <a class="navbar-brand fw-bold" href="/">
                            <span class="logo-clr">Kyra</span>
                            <span><i class="fas fa-circle logo-circle"></i></span>
                            <span class="logo-clr">Technologies</span>
                        </a>
                        <div class="d-flex ms-auto align-items-center pt-2">
                            <a href="/" class="text-dark text-decoration-none fw-bold me-5 d-sm-block d-none mb-2"><i class="fas fa-home"></i></a>
                            <a href="services.html" class="text-dark text-decoration-none fw-bold me-5 bottom-hover d-sm-block d-none" aria-current="page">Services</a>
                            <a href="caseStudy.html" class="text-dark text-decoration-none fw-bold me-5 bottom-hover d-sm-block d-none">Case Study</a>
                        </div>
                        <a href="#offcanvasrtl" class="navbar-toggler border-0 icon" role="button" data-bs-toggle="offcanvas" aria-controls="offcanvasrtl">
                        <span class="toggle-icon"></span>
                        </a>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasrtl" aria-labelledby="offcanvasrtl">
                        <div class="offcanvas-header position-relative">
                            <a class="navbar-brand fw-bold" href="/">
                                <span class="logo-clr">Kyra</span>
                                <span><i class="fas fa-circle logo-circle"></i></span>
                                <span class="logo-clr">Technologies</span>
                            </a>
                            <button type="button" class="btn-close text-reset btnclose shadow-none pe-4" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="nav flex-column">
                                <li class='sub-menu mb-3'><a href='#message' class="text-decoration-none fs-3 text-dark">
                                    <div class="d-flex">
                                        <div>Services</div>
                                        <div class='fal fa-chevron-down right ms-auto'></div>
                                    </div>
                                </a>
                                    <ul type="none" class="px-0 w-100">
                                        <div class="accordion pt-3" id="accordionExample">
                                            <div class="accordion-item border-0">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <strong>Custom Apps</strong>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body p-0 pb-3">
                                                        <ul type='none' class="px-0 nav flex-column d-block">
                                                            <li><a href='mobile-app-development.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fab fa-apple"></i></div>
                                                                    <div class="bottom-hover">Mobile App Development</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='web-app-development.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex">
                                                                    <div class="w-10 text-start"><i class="far fa-browser"></i></div>
                                                                    <div class="bottom-hover">Web App Development</div>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item border-0">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <strong>Salesforce</strong>
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body p-0 pb-3">
                                                        <ul type='none' class="px-0 nav flex-column d-block">
                                                            <li><a href='maintenance-support.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fas fa-headset"></i></div>
                                                                    <div class="bottom-hover">Maintenance and Support</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='migration-integration.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fas fa-network-wired"></i></div>
                                                                    <div class="bottom-hover">Migration and Integration</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='consulting.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="far fa-browser"></i></div>
                                                                    <div class="bottom-hover">Consulting</div>

                                                                </div>
                                                            </a></li>
                                                            <li><a href='lighting.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex">
                                                                    <div class="w-10 text-start"><i class="fas fa-bolt"></i></div>
                                                                    <div class="bottom-hover">Lighting</div>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item border-0">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <strong>UI/UX</strong>
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body p-0 pb-3">
                                                        <ul type='none' class="px-0 nav flex-column d-block">
                                                            <li><a href='ux-research.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fab fa-searchengin"></i></div>
                                                                    <div class="bottom-hover">UX Research</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='ui-animation.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fas fa-radiation-alt"></i></div>
                                                                    <div class="bottom-hover">UI & Animation</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='design-testing.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fas fa-paint-brush"></i></div>
                                                                    <div class="bottom-hover">Design Testing</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='product-design.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex">
                                                                    <span class="w-10 text-start"><i class="fab fa-product-hunt"></i></span>
                                                                    <span class="bottom-hover">Product Design</span>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item border-0">
                                                <h2 class="accordion-header" id="headingFour">
                                                    <button class="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        <strong>Web Development</strong>
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body p-0 pb-3">
                                                        <ul type='none' class="px-0 nav flex-column d-block">
                                                            <li><a href='php-development.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fab fa-php"></i></div>
                                                                    <div class="bottom-hover">PHP Development</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='mern-stack-development.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fas fa-file-code"></i></div>
                                                                    <div class="bottom-hover">MERN Stack Development</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='node-js-development.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fab fa-node-js"></i></div>
                                                                    <div class="bottom-hover">Node Js Development</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='react-js-development.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex">
                                                                    <div class="w-10 text-start"><i class="fab fa-js"></i></div>
                                                                    <div class="bottom-hover">React Js Development</div>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item border-0">
                                                <h2 class="accordion-header" id="headingFive">
                                                    <button class="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        <strong>Mobile App Development</strong>
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body p-0 pb-3">
                                                        <ul type='none' class="px-0 nav flex-column d-block">
                                                            <li><a href='e-commerce-development.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fas fa-user-graduate"></i></div>
                                                                    <div class="bottom-hover">E-commerce Development</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='react-native-app.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex">
                                                                    <div class="w-10 text-start"><i class="fab fa-react"></i></div>
                                                                    <div class="bottom-hover">React Native App Development</div>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item border-0">
                                                <h2 class="accordion-header mb-3" id="headingSix">
                                                    <button class="accordion-butto collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        <strong>CMS & E-commerce</strong>
                                                    </button>
                                                </h2>
                                                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body p-0">
                                                        <ul type='none' class="px-0 nav flex-column d-block">
                                                            <li><a href='wordpress-development.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex mb-2">
                                                                    <div class="w-10 text-start"><i class="fab fa-wordpress-simple"></i></div>
                                                                    <div class="bottom-hover">Word press Development</div>
                                                                </div>
                                                            </a></li>
                                                            <li><a href='e-commerce-cms-development.html' class="text-decoration-none text-dark">
                                                                <div class="d-flex">
                                                                    <div class="w-10 text-start"><i class="fas fa-user-graduate"></i></div>
                                                                    <div class="bottom-hover">E-commerce Development</div>
                                                                </div>
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li class="nav-item me-auto">
                                    <a href="caseStudy.html" class="nav-link text-dark bottom-hover ps-0 fs-3">Case Study</a>
                                </li>
                                <li class="nav-item me-auto">
                                    <a href="about.html" class="nav-link text-dark bottom-hover ps-0 fs-3">About</a>
                                </li>
                                <li class="nav-item me-auto">
                                    <a href="we-are-hiring.html" class="nav-link text-dark bottom-hover ps-0 fs-3">We are Hiring</a>
                                </li>
                                <li class="nav-item me-auto">
                                    <a href=" " class="nav-link text-dark bottom-hover ps-0 fs-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </nav>
                 </div >
             
    </>
  )
}

export default Header
