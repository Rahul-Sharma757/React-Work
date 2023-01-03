import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    const [showResults, setShowResults] = React.useState(false);

    const onClick = () => { showResults === true ? setShowResults(false) : setShowResults(true) };
    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            document.getElementById('upScroll').style.top = '-100px';
        } else {
            document.getElementById('upScroll').style.top = "0";
        }
        lastScrollTop = scrollTop;

    });

    var scrollDown = 0;
    // var hideClass = document.getElementById('upScroll');
    window.addEventListener("scroll", function () {
        var upper = window.pageYOffset || document.documentElement.scrollDown;
        if (upper > scrollDown) {
            document.getElementById('upScroll').classList.remove("hide");
            document.getElementById('upScroll').classList.add('bg-white');
            document.getElementById('upScroll').classList.remove('bg-transparent');
            document.getElementById('upScroll').classList.add("shadow-sm");
        } else {
            document.getElementById('upScroll').classList.remove("shadow-sm");
            document.getElementById('upScroll').classList.add("hide");
            document.getElementById('upScroll').classList.add('bg-transparent');
            document.getElementById('upScroll').classList.remove('bg-white');
        }
    });

    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-light px-2 px-md-4 fixed-top hide transi py-0" id="upScroll">
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bold" to="/">
                            <span className="logo-clr">Kyra</span>
                            <span><i className="fas fa-circle logo-circle"></i></span>
                            <span className="logo-clr">Technologies</span>
                        </Link>
                        <div className="d-flex ms-auto align-items-center pt-2">
                            <Link to="/" className="text-dark text-decoration-none fw-bold me-5 d-sm-block d-none mb-2"><i className="fas fa-home"></i></Link>
                            <Link to="/ServicesPage" className="text-dark text-decoration-none fw-bold me-5 bottom-hover d-sm-block d-none" aria-current="page">Services</Link>
                            <Link to="/caseStudyPage" className="text-dark text-decoration-none fw-bold me-5 bottom-hover d-sm-block d-none">Case Study</Link>
                        </div>
                        <Link to="#offcanvasrtl" className="navbar-toggler border-0 icon" role="button" data-bs-toggle="offcanvas" aria-controls="offcanvasrtl">
                            <span className="toggle-icon"></span>
                        </Link>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasrtl" aria-labelledby="offcanvasrtl">
                            <div className="offcanvas-header position-relative">
                                <Link className="navbar-brand fw-bold" to="/">
                                    <span className="logo-clr">Kyra</span>
                                    <span><i className="fas fa-circle logo-circle"></i></span>
                                    <span className="logo-clr">Technologies</span>
                                </Link>
                                <button type="button" className="btn-close text-reset btnclose shadow-none pe-4" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="nav flex-column">
                                    <li className='sub-menu mb-3'><Link to='#message' onClick={onClick} id='sub-menua' className="text-decoration-none fs-3 text-dark">
                                        <div className="d-flex">
                                            <div>Services</div>
                                            <div className='fal fa-chevron-down right ms-auto'></div>
                                        </div>
                                    </Link>
                                        {showResults ? <ul type="none" className="px-0 w-100">
                                            <div className="accordion pt-3" id="accordionExample">
                                                <div className="accordion-item border-0">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <strong>Custom Apps</strong>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body p-0 pb-3">
                                                            <ul type='none' className="px-0 nav flex-column d-block">
                                                                <li><Link to='/mobileAppDevelopmentPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fab fa-apple"></i></div>
                                                                        <div className="bottom-hover">Mobile App Development</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/webAppDevelopment' className="text-decoration-none text-dark">
                                                                    <div className="d-flex">
                                                                        <div className="w-10 text-start"><i className="far fa-browser"></i></div>
                                                                        <div className="bottom-hover">Web App Development</div>
                                                                    </div>
                                                                </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <strong>Salesforce</strong>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body p-0 pb-3">
                                                            <ul type='none' className="px-0 nav flex-column d-block">
                                                                <li><Link to='/maintainanceSupportPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fas fa-headset"></i></div>
                                                                        <div className="bottom-hover">Maintenance and Support</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/migrationIntigrationPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fas fa-network-wired"></i></div>
                                                                        <div className="bottom-hover">Migration and Integration</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/consultingPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="far fa-browser"></i></div>
                                                                        <div className="bottom-hover">Consulting</div>

                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/lightingPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex">
                                                                        <div className="w-10 text-start"><i className="fas fa-bolt"></i></div>
                                                                        <div className="bottom-hover">Lighting</div>
                                                                    </div>
                                                                </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <strong>UI/UX</strong>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body p-0 pb-3">
                                                            <ul type='none' className="px-0 nav flex-column d-block">
                                                                <li><Link to='/uxResearchPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fab fa-searchengin"></i></div>
                                                                        <div className="bottom-hover">UX Research</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/ui_animationPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fas fa-radiation-alt"></i></div>
                                                                        <div className="bottom-hover">UI & Animation</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/designTestingPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fas fa-paint-brush"></i></div>
                                                                        <div className="bottom-hover">Design Testing</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/productDesignPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex">
                                                                        <span className="w-10 text-start"><i className="fab fa-product-hunt"></i></span>
                                                                        <span className="bottom-hover">Product Design</span>
                                                                    </div>
                                                                </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            <strong>Web Development</strong>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body p-0 pb-3">
                                                            <ul type='none' className="px-0 nav flex-column d-block">
                                                                <li><Link to='/phpDevelopmentPage' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fab fa-php"></i></div>
                                                                        <div className="bottom-hover">PHP Development</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/mernStackDevelopment' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fas fa-file-code"></i></div>
                                                                        <div className="bottom-hover">MERN Stack Development</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/nodeJsDevelopment' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fab fa-node-js"></i></div>
                                                                        <div className="bottom-hover">Node Js Development</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/reactJsDevelopment' className="text-decoration-none text-dark">
                                                                    <div className="d-flex">
                                                                        <div className="w-10 text-start"><i className="fab fa-js"></i></div>
                                                                        <div className="bottom-hover">React Js Development</div>
                                                                    </div>
                                                                </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0">
                                                    <h2 className="accordion-header" id="headingFive">
                                                        <button className="accordion-butto collapsed p-0 pb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            <strong>Mobile App Development</strong>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body p-0 pb-3">
                                                            <ul type='none' className="px-0 nav flex-column d-block">
                                                                <li><Link to='/ecommerceDevelopment' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fas fa-user-graduate"></i></div>
                                                                        <div className="bottom-hover">E-commerce Development</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/reactNativeAppDevelopment' className="text-decoration-none text-dark">
                                                                    <div className="d-flex">
                                                                        <div className="w-10 text-start"><i className="fab fa-react"></i></div>
                                                                        <div className="bottom-hover">React Native App Development</div>
                                                                    </div>
                                                                </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0">
                                                    <h2 className="accordion-header mb-3" id="headingSix">
                                                        <button className="accordion-butto collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                            <strong>CMS & E-commerce</strong>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body p-0">
                                                            <ul type='none' className="px-0 nav flex-column d-block">
                                                                <li><Link to='/wordPressDevelopment' className="text-decoration-none text-dark">
                                                                    <div className="d-flex mb-2">
                                                                        <div className="w-10 text-start"><i className="fab fa-wordpress-simple"></i></div>
                                                                        <div className="bottom-hover">Word press Development</div>
                                                                    </div>
                                                                </Link></li>
                                                                <li><Link to='/ecommerceCmsDevelopment' className="text-decoration-none text-dark">
                                                                    <div className="d-flex">
                                                                        <div className="w-10 text-start"><i className="fas fa-user-graduate"></i></div>
                                                                        <div className="bottom-hover">E-commerce Development</div>
                                                                    </div>
                                                                </Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul> : null}

                                    </li>
                                    <li className="nav-item me-auto">
                                        <Link to="/caseStudyPage" className="nav-link text-dark bottom-hover ps-0 fs-3">Case Study</Link>
                                    </li>
                                    <li className="nav-item me-auto">
                                        <Link to="/aboutPage" className="nav-link text-dark bottom-hover ps-0 fs-3">About</Link>
                                    </li>
                                    <li className="nav-item me-auto">
                                        <Link to="/weAreHiringPage" className="nav-link text-dark bottom-hover ps-0 fs-3">We are Hiring</Link>
                                    </li>
                                    <li className="nav-item me-auto">
                                        <Link to=' ' className="nav-link text-dark bottom-hover ps-0 fs-3" data-bs-toggle="modal" data-bs-target="#exampleModalContact">Contact</Link>
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
