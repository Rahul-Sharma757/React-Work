import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ncrr from '../img/Screenshot 2021-09-17 at 4.26.58 PM.png'

function NCRR() {
  return (
    <>
      <Header />
      <section className="rail-road-banner position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 fw-bold logo-clr">NCRR</h2>
                        <h3 className="mt-3">Client - NCRR</h3>
                        <p className="lead">Industry - RailRoad</p>
                    </div>
                </div>
            </section>
            <section>
               <div className="container">
                   <p className="lead">North California Railroad Company / A private corporation manages the 317 mile rail corridor.</p>
                   <img src={ncrr} className="img-fluid" alt='NCRR' />
                    <h2 className="fw-bold mt-4 mb-3">Challenges for Client</h2>
                    <p>
                        North California Railroad Company / A private corporation manages the 317 mile rail corridor. 
                        NCRR requires a utility occupancy portal where customers can submit their details by signing up 
                        themselves. They could submit their details as per their type of installation required and verify 
                        their purpose of installation. If they want to install any kind of pipeline or wireline which comes 
                        under the NCRR corridor, they can process their application. The portal should verify the documentation, 
                        plan and profiles which is necessary. After the verification of all the necessary documents. The details 
                        should be cross checked and sent to the concerned department. Once the department receives all the documentation 
                        an agreement should process which requires license agreement and once verified with 
                        the applicant. The applicant could pay a fee digitally to execute the agreement.
                    </p>
               </div>
           </section>
           <section className="pb-8 pt-6">
              <div className="container">
                    <h2 className="fw-bold mt-4 mt-lg-0">Solution Overview</h2>
                    <p className="">he client is provided a portal where applicant information will be collected. 
                        Applicant can sign up and fill all the structure like location, purpose, length, 
                        type of wiring, necessary drawings. The applicant needs to pay some amount which will
                        go to another/concerned firm for reviewing the application. Once the all process is done 
                        correctly the customer will receive an email link and put them under review. If details are 
                        not verified then the applicant will be rejected and advised to fill in for missing or wrong 
                        information. Again the applicant puts in all the mandatory information then the 
                        application goes for feedback from the engineer. Once feedback is done the same will 
                        be communicated to the applicant and ask them to make necessary changes. The process will 
                        keep on repeating under review unless the application is complete or acceptable by the department.
                    </p>
              </div>
           </section>
      <Footer />
    </>
  )
}

export default NCRR
