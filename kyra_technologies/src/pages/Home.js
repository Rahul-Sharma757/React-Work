import React from 'react'; 
import About from '../components/About';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
