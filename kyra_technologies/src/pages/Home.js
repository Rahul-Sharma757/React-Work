import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Projects from '../components/Projects';
import Services from '../components/Services';

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Projects />
    </>
  )
}

export default Home
