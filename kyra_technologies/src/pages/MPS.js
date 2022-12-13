import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import mps from '../img/Screenshot 2021-09-17 at 4.26.58 PM.png'

function MPS() {
  return (
    <>
      <Header />
      <section className="project-detail-banner position-relative pt-350">
                <div className="about-absolute">
                    <div className="container-fluid text-center position-relative align-center">
                        <h2 className="display-4 logo-clr fw-bold">MPS</h2>
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <img src={mps} className="img-fluid mt-3 mt-md-5" alt="img" />
                        <p className="lead mt-4">Every enterprise survives on goods and they need to be produced. Once a product is manufactured that has to be sent to the consumer. 
                            It seems very simple but an enterprise cannot do it alone. The whole system needs  production, printing, contract repairers, freight 
                            forwarder services, distribution centres, carriers, customer services, international procurements, and so on.
                        </p>
                    <h2 className="fw-bold mb-3 pt-6">Challenges for Client</h2>   
                    <p>
                        Giving an answer to this Kyra Technologies assists our client with a system by providing the same on web portals.
                    </p>
                    <p>We started our work remotely with a US based client. They wanted to work on credentials, transaction search with serial 
                        numbers of their products and their location. However the client was facing disruptions to manufacture of certain 
                        products which will be provided to consumers in the US. In the meantime from production to label the production 
                        and components of a particular product and all the services provided were lacking. In production itself if a 
                        component is defective or damaged where it should be reported, either back to the brand or kept in the warehouse
                        or with the manufacturer. The whole system was very lengthy and to overcome that Kyra technologies came into picture.
                    </p>
                    <h2 className="fw-bold pt-6 mb-3">Solution Overview</h2>
                    <p>Giving a multi-level solution to the whole system Kyra Technologies using Netsuite and MPS. We have produced systems 
                        for their clients with the collective effort of our developers. We have built systems where they can track the producers. 
                        We created a strategy where clients can analyze and measure all the processes of its production.This process, where one checks 
                        the production of its product and its components and verifies them. Once the production is done it's good to go for activation. 
                    </p>
                    <p>
                        If not, there will be a failure pop up in production. It can be due to defective raw material or maybe a vendor is selling an 
                        unauthorised product. So, this system makes it very easy for real time data based manufacturers.
                    </p>
                </div>
            </section>
      <Footer />
    </>
  )
}

export default MPS
